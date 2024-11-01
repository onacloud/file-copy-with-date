import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs/promises';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyFileWithDate', async () => {
        try {
            // 현재 활성화된 편집기 가져오기
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('열린 파일이 없습니다.');
                return;
            }

            // 현재 파일의 경로 정보 가져오기
            const currentFile = editor.document.uri;
            const workspaceFolder = vscode.workspace.getWorkspaceFolder(currentFile);
            
            if (!workspaceFolder) {
                vscode.window.showErrorMessage('워크스페이스를 찾을 수 없습니다.');
                return;
            }

            // 파일 경로 분석
            const parsedPath = path.parse(currentFile.fsPath);
            
            // 현재 날짜를 YYYYMMDD 형식으로 가져오기
            const date = new Date();
            const dateString = date.getFullYear().toString() +
                             (date.getMonth() + 1).toString().padStart(2, '0') +
                             date.getDate().toString().padStart(2, '0');
            
            // 새 파일명 생성
            const newFileName = `${parsedPath.name}_${dateString}${parsedPath.ext}`;
            const newFilePath = vscode.Uri.file(path.join(parsedPath.dir, newFileName));

            try {
                // 파일이 이미 존재하는지 확인
                await fs.access(newFilePath.fsPath);
                const overwrite = await vscode.window.showWarningMessage(
                    `${newFileName} 파일이 이미 존재합니다. 덮어쓰시겠습니까?`,
                    '예', '아니오'
                );
                if (overwrite !== '예') {
                    return;
                }
            } catch (err) {
                // 파일이 존재하지 않음 - 정상 진행
            }

            // 파일 내용 읽기
            const content = await fs.readFile(currentFile.fsPath);
            
            // 새 파일 쓰기
            await fs.writeFile(newFilePath.fsPath, content);

            // 새 파일 열기
            const doc = await vscode.workspace.openTextDocument(newFilePath);
            await vscode.window.showTextDocument(doc, {
                preview: false,
                viewColumn: vscode.ViewColumn.Beside
            });

            vscode.window.showInformationMessage(`파일이 복사되었습니다: ${newFileName}`);
        } catch (error) {
            vscode.window.showErrorMessage(`파일 복사 중 오류가 발생했습니다: ${error instanceof Error ? error.message : String(error)}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}