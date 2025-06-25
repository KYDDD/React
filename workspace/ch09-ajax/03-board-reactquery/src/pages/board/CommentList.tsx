import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentNew from "@/pages/board/CommentNew";
import type { ReplyListResType } from "@/types/BoardType";
import { useQuery } from "@tanstack/react-query";

function CommentList() {
  const axios = useAxiosInstance();
  // API 서버에 1번 게시물의 댓글목록을 fetch()요청으로 보낸다.

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", 1, "replies"],
    //queryFn은 프로미스를 호출하도록 만들어야함
    queryFn: () =>
      axios.get("/posts/1/replies", {
        params: {
          //delay: Math.random() * 6000
          delay: 1000,
        },
      }),
    //select가 없으면 response가 통째로 data에 들어간다.
    select: (response: { data: ReplyListResType }) => response.data.item,

    retry: 3, // 작업이 실패하면 자동으로 재시도하기(default 3)
    refetchOnWindowFocus: true, //다른탭이나 앱에서 작업 후에 돌아오면 데이터 자동으로 갱신하기(default true)
    staleTime: 1000 * 20, //일정 시간동안은 캐시해서 서버 호출 횟수 줄이기(default 0 )
    refetchInterval: 1000 * 3, // 주기적으로 호출해서 데이터를 자동으로 갱신하기
  });

  const replyList = data?.map((reply) => <li key={reply._id}>{reply.content}</li>);

  return (
    <>
      <h3>댓글 목록</h3>

      {isLoading && <p>댓글 로딩중...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <ul>{replyList}</ul>
          <CommentNew />
        </>
      )}
    </>
  );
}

export default CommentList;
