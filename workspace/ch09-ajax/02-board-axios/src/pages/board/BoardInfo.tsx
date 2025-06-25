import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentList from "@/pages/board/CommentList";
import type { BoardInfoResType, BoardInfoType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function BoardInfo() {
  //서버의 데이터를 저장할 상태
  const [data, setData] = useState<BoardInfoType | null>(null);
  //로딩 상태
  const [isLoading, setIsLoading] = useState(false);
  //에러 상태
  const [error, setError] = useState<Error | null>(null);

  const axios = useAxiosInstance();

  // API 서버에 1번 게시물의 상세정보를 fetch() 요청으로 보낸다.
  const requestInfo = async () => {
    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const response = await axios.get<BoardInfoResType>("/posts/1?delay=1000");
      // 게시물 상세 정보를 출력
      if (response.data.ok) {
        setData(response.data.item);
        setError(null);
      }
    } catch (err) {
      setError(err as Error);
    } finally {
      // 성공, 실패와 상관없이 로딩 상태를 false로 지정
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestInfo();
  }, []); //마운트 후에 한번만 실행

  return (
    <>
      <h1>02 Axios 라이브러리</h1>

      {isLoading && <p>로딩중...</p>}

      {error && <p>{error.message}</p>}

      {/* 자연스러운 타입가드 */}
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
