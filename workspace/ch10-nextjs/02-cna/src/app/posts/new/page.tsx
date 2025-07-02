import { Metadata } from "next";
import RegistForm from "./RegistForm";

export const metadata: Metadata = {
  title: "게시글 등록",
  description: "게시글 등록 페이지입니다.",
};

export default function NewPage() {
  return (
    <>
      <h1>게시글 등록</h1>
      <RegistForm />
    </>
  );
}

// 클라이언트가 해야될 작업과 서버가 해야될 작업을 분리하는 작업을 함
