# 포트폴리오 실습 템플릿

GitHub Copilot과 함께 자기 포트폴리오를 만드는 React + JavaScript + Vite 초기 프로젝트입니다.
현재 사이트는 자기소개, 관심사, 강점과 배움, 활동·작품, 목표를 한 페이지에 표시합니다.
활동·작품 메뉴는 같은 페이지의 `#works` 영역으로 이동합니다.
프로젝트는 `src/App.jsx`의 `projects` 배열에서 관리하며, 제목·소개·작업 형태·역할·도구·결과·배운 점을 카드에 표시합니다.
현재 등록된 프로젝트는 「로봇팔 액추에이터 제작」이며, 사진·외부 링크·별도 상세 페이지 없이 소개합니다.
프로젝트가 없으면 활동·작품 영역에 추후 추가 안내를 표시합니다.

## 내 프로젝트로 시작하기

1. GitHub의 **Use this template → Create a new repository**로 자신의 저장소를 만듭니다.
2. 새로 만든 저장소를 컴퓨터로 복제하고 Visual Studio Code에서 엽니다.
3. 아래 실행 방법에 따라 사이트를 실행합니다.
4. GitHub Copilot과 함께 자기소개, 프로젝트 설명, 색상과 이미지를 자신의 내용으로 바꿉니다.

프로젝트 소개에는 실제 경험과 작업만 담아 주세요.

## 실행하기

1. Node.js 24 LTS를 설치합니다.
2. Visual Studio Code에서 복제한 프로젝트 폴더를 엽니다.
3. 터미널에서 다음 명령을 실행합니다.

```sh
npm install
npm run dev
```

터미널에 표시되는 주소를 브라우저에서 엽니다. 개발 서버는 `Ctrl + C`로 종료합니다.

## 수정할 파일

- `src/App.jsx`: 화면 내용과 React 컴포넌트
- `src/App.css`: 화면 스타일
- `src/index.css`: 전체 공통 스타일
- `public/`: 직접 사용할 이미지 등 정적 파일

파일을 수정하고 저장하면 실행 중인 브라우저에 반영됩니다.

## 확인 명령

```sh
npm run lint
npm run build
```

`npm run build`는 배포용 파일을 `dist` 폴더에 만듭니다.
