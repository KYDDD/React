import { RouterProvider } from "react-router";
// import router from "./routes";
import router from "./routes-lazy";
import "./App.css";
import { Suspense } from "react";

function App() {
  //하위 컴포넌트가 랜더링이 완료되기 전까지 대체해서 보여줄 대체 컨텐츠를 fallback아리는 프롭으로 지정
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
