import { NextRequest, NextResponse } from "next/server";

// 게시물 상세 조회
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log("GET 라우트 핸들러", id);
  // db연동해서 상세 정보 조회 작업을 직접 구현(풀스택)

  // 준비된 api서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts/${id}`, {
    headers: {
      "Client-Id": "openmarket",
    },
  });

  const data = await res.json();
  //Response는 fetch함수에서 기본으로 제공되는 내장함수
  return NextResponse.json(data);
}

export function POST() {
  return NextResponse.json("route handler의 POST 응답");
}

export function DELETE() {
  return NextResponse.json("route handler의 DELETE 응답");
}
