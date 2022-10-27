# beomseok dev

frontend tech 연습 프로젝트 입니다.

## frontend

- Next.js 프레임워크 사용
- 사이드 바, 헤더 스타일 적용
- 오른쪽 상단 미니미 버튼을 통해 입장한 사용자들과 상호작용이 가능
- 왼쪽 하단 채팅 버튼을 통해 입장한 사용자들과 의사소통 가능(백엔드와의 소켓 연결)
- study 페이지에는 component 구현, css 연습, tech study 등을 확인할 수 있습니다.

## backend

- Express 프레임워크를 사용한 간단한 backend 구성
- routing-controllers 패키지를 통해 데코레이터로 라우터 구성
- frontend와 소켓 연결을 통해 미니미의 움직임, 채팅 구현

## 배포

- Frontend - Vercel을 통해 자동 배포되도록 구성
- Backend - aws free tier 서버에 GitHub Action으로 자동 배포되도록 구성
- url - [beomseok.dev](https://beomseok.dev)

## To be continued...🧑‍💻

### Frontend

- [x] ~~첫 페이지 GitHub MarkDown 렌더링~~ -> github api 페이지를 따로 만듦
- [ ] 마이페이지 구성
- [ ] 미니미 모달 채팅 방 디자인 및 구현
- [ ] 네이버, GitHub 연동 페이지 구현

### Backend

- [x] github api 연결
- [ ] 모달 채팅 방 전체 채팅 방 socket rooms를 통해 분리 및 각각 연결
- [ ] 연동 관련 로직 및 api 설정
- [ ] db 연결

### DB

- [ ] 프로젝트에 어울리는 db 종류 선택
- [ ] table 및 속성 구성
