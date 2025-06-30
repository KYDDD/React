import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function CommentNew() {
  // 댓글 내용 저장
  const [content, setContent] = useState("");

  //axios instance
  const axios = useAxiosInstance();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) => axios.post("/posts/1/replies", formData),
    onSuccess() {
      setContent("");
      //TODO 댓글 등록 후 댓글 목록 갱신(requestCommentList()를 props로 전달받아서 호출)
      queryClient.invalidateQueries({ queryKey: ["posts", 1, "replies"] });
    },
  });

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO 중복 요청 방지(요청 시작 전에 버튼 비활성화, 응답 완료 후에 버튼 활성화)
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    mutate(formData);
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea value={content} name="content" onChange={(e) => setContent(e.target.value)} rows={3} cols={30} placeholder="댓글 내용" />
        <br />
        <button type="submit" disabled={isPending}>
          등록
        </button>
      </form>
    </>
  );
}

export default CommentNew;
