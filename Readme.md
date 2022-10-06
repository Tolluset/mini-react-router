# mini-react-router

react-router-dom 같이 라우팅을 해주는 최소한의 컴포넌트를 구성

## 구성

- libs
  - BrowserRouter.tsx
      최상위 `basename`을 설정하기 위한 라우터

  - Router.tsx 
      하위 라우터에서 사용할 컨텍스트, `onpopstate`를 관리

  - Route.tsx
      `props`로 받은 `path`와 컨텍스트의 `path`가 일치하면 리턴

- hooks
  - useRouter.tsx
      `history.push`의 래핑 훅

## 작동확인

https://tolluset.github.io/mini-react-router/