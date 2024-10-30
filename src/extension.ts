import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyFileWithDate', async () => {
        // 현재 활성화된 편집기 가져오기
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('열린 파일이 없습니다.');
            return;
        }

        try {
            // 현재 파일의 경로 정보 가져오기
            const currentFile = editor.document.uri.fsPath;
            const parsedPath = path.parse(currentFile);
            
            // 현재 날짜를 YYYYMMDD 형식으로 가져오기
            const date = new Date();
            const dateString = date.getFullYear().toString() +
                             (date.getMonth() + 1).toString().padStart(2, '0') +
                             date.getDate().toString().padStart(2, '0');
            
            // 새 파일명 생성 (기존파일명_YYYYMMDD.확장자)
            const newFileName = `${parsedPath.name}_${dateString}${parsedPath.ext}`;
            const newFilePath = path.join(parsedPath.dir, newFileName);
            
            // 파일 복사
            fs.copyFileSync(currentFile, newFilePath);
            
            // 성공 메시지 표시
            vscode.window.showInformationMessage(`파일이 복사되었습니다: ${newFileName}`);
            
            // 새로 만든 파일 열기
            const doc = await vscode.workspace.openTextDocument(newFilePath);
            await vscode.window.showTextDocument(doc);
        } catch (error) {
            vscode.window.showErrorMessage('파일 복사 중 오류가 발생했습니다: ' + error);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}