import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";

// 항상 렌더링 될 공통 레이아웃을 레이아웃 컴포넌트에 표시

function Layout() {
  return (
    <>
      <div className="todoapp">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
