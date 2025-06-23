import CommentList from "@/pages/board/CommentList";
import type { BoardInfo } from "@/types/BoardType";
import { useEffect, useState } from "react";

function BoardInfo() {
  const [data, setData] = useState<BoardInfo | null>(null);

  // API 서버에 1번 게시물의 상세정보를 fetch() 요청으로 보낸다.
  const requestInfo = async () => {
    try {
      const response = await fetch("https://fesp-api.koyeb.app/market/posts/1", {
        headers: {
          "Client-Id": "openmarket",
        },
      });
      console.log("response", response);
      const jsonData = await response.json();
      console.log("jsonData", jsonData);
      if (jsonData.ok) {
        // 응답이 성공일 경우, 게시물 상세 정보를 출력
        setData(jsonData.item);
      } else {
        // 응답이 실패일 경우, 에러 메시지 출력
      }
    } catch (err) {
      alert("네트워크 문제로 인해 게시물 상세 조회에 실패했습니다. \n잠시 후 다시 요청하시기 바랍니다.");
      console.error(err);
    }
  };

  useEffect(() => {
    requestInfo();
  }, []); //마운트 후에 한번만 실행

  return (
    <>
      <h1>01 Fetch API</h1>
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <CommentList />
        </>
      )}
    </>
  );
}

export default BoardInfo;
