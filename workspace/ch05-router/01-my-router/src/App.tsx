import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import { useEffect, useState } from "react";

function App() {
  //현재 url을 상태로 관리
  const [currentPath, setCurrentPath] = useState(location.pathname);

  //컴포넌트가 업데이트 될 때 이전 이벤트 핸들러를 삭제한다.
  //컴포넌트가 마운트 되면 이벤트 핸들러를 등록
  useEffect(() => {
    //url이 변경되면 컴포넌트를 교체한다.
    const handleLocationChange = () => {
      console.log(location.pathname, "으로 주소 변경됨", new Date());
      setCurrentPath(location.pathname);
    };

    //popstate 이벤트가 발생하면 handleLocationChange 호출
    //브라우저의 url이 바뀌면 popstate라는 이벤트가 발생한다.
    //정확히 말하면 히스토리에
    window.addEventListener("popstate", handleLocationChange);

    //컴포넌트가 언마운트 되면 이벤트 핸들러를 등록
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []); //빈 배열을 전달해서 마운트/ 언마운트 될때 호출

  // URL에 맞는 컴포넌트를 반환
  const renderComponent = () => {
    switch (currentPath) {
      case "/":
      case "/home":
        return <Home />;
      case "/page1":
        return <Page1 />;
      case "/page2":
        return <Page2 />;
      default:
        return <p>404에러</p>;
    }
  };
  return <>{renderComponent()}</>;
}

export default App;
