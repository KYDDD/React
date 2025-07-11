"use server";
import { PostInfoRes } from "@/types/board";

//서버 액션

// 게시글 등록
export async function createPost(prevState: PostInfoRes, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const body = { title, content, type: "qna" };
  console.log("바디", body);
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    method: "POST",
    body: JSON.stringify({ title, content, type: "qna" }),
    headers: {
      "Client-Id": "openmarket",
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}
