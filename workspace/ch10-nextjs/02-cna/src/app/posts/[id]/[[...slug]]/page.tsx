// 서버에서 내보내주는 데이터만 다르고 비슷한 로직, 결과를 내는 경우,
// Catch-all 세그먼트를 고려할 것( [...slug] )

import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
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

// 상세보기 + 좋아요 | 즐겨찾기 목록 + 좋아요 | 즐겨찾기 상세 목록
export default async function InfoPage({ params }: { params: { id: string; slug: string[] } }) {
  const pageParams = await params;
  console.log("pageParams", pageParams);

  switch (pageParams.slug?.[0]) {
    case "likes":
      // 좋아요 목록 출력
      break;
    case "favorite":
      // 즐겨찾기 목록 출력
      break;
  }

  return (
    <>
      <h1>상세 조회 - {pageParams.id}번 게시물</h1>
      <Link href={`/posts/${pageParams.id}/likes`}>좋아요 목록 보기</Link>

      {pageParams.slug?.[0] && (
        <>
          <h2>
            {pageParams.id}번 게시물의&nbsp;
            {pageParams.slug?.[0] === "likes"
              ? "좋아요 목록"
              : pageParams.slug?.[0] === "favorite"
              ? "즐겨찾기 목록"
              : "이 페이지는 없는 페이지입니다."}
          </h2>
          <Link href={`/posts/${pageParams.id}/likes/2`}>2번 좋아요 - 라이크핑</Link>
          <Link href={`/posts/${pageParams.id}/likes/1`}>1번 좋아요 - 좋아핑</Link>
        </>
      )}
      {pageParams.slug?.[1] && (
        <>
          <h3>{pageParams.slug?.[1]} 상세 정보 출력</h3>
          <p>좋아핑, 2025.07.01 좋아요 누름</p>
        </>
      )}
    </>
  );
}
