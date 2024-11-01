# File Copy with Date

현재 편집 중인 파일을 날짜 접미사(YYYYMMDD)를 붙여 복사본을 생성하는 VSCode 확장 기능입니다.

## 주요 기능

- **자동 날짜 추가**: 현재 파일을 복사하면서 자동으로 오늘 날짜를 파일명에 추가
- **자동 파일 열기**: 생성된 복사본이 자동으로 새 탭에서 열림
- **간편한 단축키**: `Ctrl+Alt+D` (Mac: `Cmd+Alt+D`)로 빠르게 실행
- **유연한 설정**: 날짜 형식과 구분자 커스터마이징 지원 예정

### 파일명 예시
- 원본: `example.txt` 
- 복사본: `example_20240430.txt`

## 설치 방법

1. [VS Code Marketplace](https://marketplace.visualstudio.com/)에서 "File Copy with Date" 검색
2. 또는 [직접 VSIX 파일 다운로드](https://github.com/onacloud/file-copy-with-date/releases)

### VSIX 수동 설치
1. VS Code 실행
2. 확장 패널 열기 →  ... (더보기) 메뉴 → "VSIX에서 설치..." 선택
3. 다운로드한 VSIX 파일 선택

## 사용 방법

1. 탐색기(workbench)에서 파일을 선택합니다.
2. 다음 방법 중 하나로 실행:
   - 단축키: `Ctrl+Alt+D` (Mac: `Cmd+Alt+D`)
   - 명령 팔레트(`Ctrl+Shift+P`): "Copy File With Date Suffix" 실행

## 시스템 요구사항

- Visual Studio Code 1.60.0 이상
- 권장: VS Code 최신 버전

## 알려진 문제 및 해결 방법

1. **쓰기 권한 오류**
   - 해결: 파일이 있는 폴더의 쓰기 권한을 확인하세요.
   - Windows의 경우 관리자 권한으로 VS Code 실행을 시도해보세요.

2. **단축키 충돌**
   - 해결: `Ctrl+K Ctrl+S`로 키보드 단축키 설정을 열어 충돌을 확인하고 수정할 수 있습니다.

## 릴리스 노트

### 0.0.5 (현재)
- 오류 fix

### 0.0.2
- vscode server 지원

### 0.0.1
- ✨ 최초 릴리스
- 📝 기본 파일 복사 기능
- 📅 날짜 접미사 자동 추가
- ⌨️ 커스텀 단축키 지원

## 기여 방법

1. [GitHub 저장소](https://github.com/onacloud/file-copy-with-date) 포크
2. 기능 개발 또는 버그 수정
3. Pull Request 제출

### 개발 환경 설정
```bash
git clone https://github.com/onacloud/file-copy-with-date
cd file-copy-with-date
npm install
code .
```

## 지원 및 피드백

- 🐛 버그 리포트: [GitHub 이슈](https://github.com/onacloud/file-copy-with-date/issues)
- 💡 기능 제안: [GitHub 디스커션](https://github.com/onacloud/file-copy-with-date/discussions)
- 📧 기타 문의: [이메일](mailto:your-email@example.com)

## 라이선스

MIT License © [onacloud]

---
**Powered ❤️ by [claude.ai]**