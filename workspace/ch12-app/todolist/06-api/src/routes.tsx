import Layout from "@components/Layout";
import About from "@pages/About";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import TodoAdd from "@pages/TodoAdd";
import TodoEdit from "@pages/TodoEdit";
import TodoInfo from "@pages/TodoInfo";
import TodoList from "@pages/TodoList";
import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //에러가 발생했을때 보여줄 페이지를 지정해준다.
    errorElement: <ErrorPage />,
    children: [
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
