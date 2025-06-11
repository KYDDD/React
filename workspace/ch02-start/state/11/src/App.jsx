import Message from "./components/Message";

// App 컴포넌트(어플리케이션의 시작점)
function App() {
  console.log("App 호출됨");
  return (
    <>
      <h3>11 state 대신 컴포넌트 외부의 변수(모듈 스코프 변수) 사용시 문제점</h3>
      <Message />
      <Message />
    </>
  );
}

export default App;
