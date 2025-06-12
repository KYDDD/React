import { useState } from "react";

function App() {
  // 상태관리를 위해서
  const [msg, setMsg] = useState("");

  //서버의 시간을 ajax로 요청
  const time = 125;

  return (
    <>
      <h1>01 useState - 상태 관리{time}</h1>
      <div>
        <input type="text" value={msg} onChange={(event) => setMsg(event?.target.value)} />
        <br />
        <span>입력 메세지: {msg}</span>
      </div>
    </>
  );
}

export default App;
