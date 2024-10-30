# File Copy with Date

현재 편집 중인 파일을 날짜 접미사(YYYYMMDD)를 붙여 복사본을 생성하는 VSCode 확장 기능입니다.

## 기능

- 현재 열려있는 파일을 날짜 접미사를 붙여 복사합니다.
- 복사된 파일은 자동으로 새 탭에서 열립니다.
- 파일명 형식: `원본파일명_YYYYMMDD.확장자`
  - 예: `example.txt` → `example_20240430.txt`

![기능 데모](images/demo.gif)

## 사용 방법

1. 복사하고 싶은 파일을 VSCode에서 엽니다.
2. 다음 방법 중 하나로 실행:
   - 단축키 `Ctrl+Shift+D` (Mac: `Cmd+Shift+D`) 사용
   - 명령 팔레트(`Ctrl+Shift+P`)에서 "Copy File With Date Suffix" 실행

## 요구사항

- Visual Studio Code 1.60.0 이상

## 확장 기능 설정

이 확장은 다음과 같은 설정을 제공합니다:

* `fileCopyWithDate.dateFormat`: 날짜 형식을 설정합니다. (기본값: `YYYYMMDD`)
* `fileCopyWithDate.separator`: 파일명과 날짜 사이의 구분자를 설정합니다. (기본값: `_`)

## 알려진 문제

- 현재 열려있는 파일이 없을 때는 동작하지 않습니다.
- 파일 저장 경로에 쓰기 권한이 없는 경우 오류가 발생합니다.

## 릴리스 노트

### 1.0.0
- 최초 릴리스
- 기본적인 파일 복사 기능
- 날짜 접미사 추가
- 단축키 지원

### 1.0.1 (계획됨)
- 날짜 형식 커스터마이징 지원
- 파일명 구분자 설정 기능 추가

## 개발자 정보

이 확장 기능의 소스 코드는 [GitHub 저장소](링크)에서 확인할 수 있습니다.

문제 报告나 기능 제안은 GitHub 이슈를 통해 해주시기 바랍니다.

## 라이선스

MIT License - 자세한 내용은 LICENSE 파일을 참조하세요.