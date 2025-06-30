import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import("@components/Layout"));
const About = lazy(() => import("@pages/About"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));
const Home = lazy(() => import("@pages/Home"));
const TodoAdd = lazy(() => import("@pages/TodoAdd"));
const TodoEdit = lazy(() => import("@pages/TodoEdit"));
const TodoInfo = lazy(() => import("@pages/TodoInfo"));
const TodoList = lazy(() => import("@pages/TodoList"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //에러가 발생했을때 보여줄 페이지를 지정해준다.
    errorElement: <ErrorPage />,
    children: [
      //url이 부모컴포넌트의 url과 일치할 경우 기본으로 렌더링 할 자식 라우트, index라우트
      { index: true, element: <Home /> },
      { path: "home", element: <Navigate to="/" /> },
      { path: "about", element: <About /> },
      { path: "list", element: <TodoList /> },
      //동적 세그먼트 동적인 값을 사용할떄
      {
        path: "list/:_id",
        element: <TodoInfo />,
        children: [{ path: "edit", element: <TodoEdit /> }],
      },
      { path: "/add", element: <TodoAdd /> },
    ],
  },
]);

export default router;
