import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentList from "@/pages/board/CommentList";
import type { BoardInfoResType } from "@/types/BoardType";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

function BoardInfo() {
  const axios = useAxiosInstance();

  const { data, error } = useSuspenseQuery({
    queryKey: ["posts", 1],
    //queryFn은 프로미스를 호출하도록 만들어야함
    queryFn: () => axios.get("/posts/1?delay=1000"),
    //select가 없으면 response가 통째로 data에 들어간다.
    select: (response: { data: BoardInfoResType }) => response.data.item,
  });

  return (
    <>
      <h1>04 React Query(TanStack Query) 라이브러리 + Suspense</h1>

      {error && <p>{error.message}</p>}

      {/* 자연스러운 타입가드 */}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <Suspense fallback={<p>Suspense 게시물 댓글 로딩중...</p>}>
            <CommentList />
          </Suspense>
        </>
      )}
    </>
  );
}

export default BoardInfo;
