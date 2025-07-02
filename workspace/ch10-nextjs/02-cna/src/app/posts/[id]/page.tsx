import { Metadata } from "next";

//동적인 메타 데이터
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  //next.js15 부터 params는 비동기 처리 필요
  const { id } = await params;

  const data = {
    title: `${id}번 게시물`,
    content: "게시판 이용 수칙입니다.",
  };

  return {
    title: data.title,
    description: data.content,
  };
}

// 이 함수가 반환한 배열만큼 SSG 페이지를 미리 생성
// 빌드하면 .next/server/app/posts/1.html, 2.html, 4.html
export function generateStaticParams() {
  // 공지글에 대한 fetch 작업
  const posts = [
    { id: "1", title: "1번 제목" },
    { id: "2", slug: "2", sid: "3", title: "2번 제목" },
    { id: "3", slug: "2", sid: "3", title: "4번 제목" },
  ];

  return posts;
}

// nextjs15부터는 params가 비동기 방식으로 넘어오기때문에 params를 사용할때는 async await을 붙여줘야한다.
export default async function InfoPage({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;

  const res = await fetch(`http://localhost:3000/api/posts/${pageParams.id}`);
  const data = await res.json();

  //await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <h1>상세 조회 - {pageParams.id}번 게시물</h1>
      <span>제목: {data.item.title}</span>
      <p>내용: {data.item.content}</p>
    </>
  );
}
