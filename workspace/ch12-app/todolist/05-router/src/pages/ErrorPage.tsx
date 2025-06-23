import { isRouteErrorResponse, useRouteError } from "react-router";

function ErrorPage() {
  // useRouteError - 에러처리 전용 라우트에 제공되는 error객체를 반환
  const err = useRouteError();
  let message = "예상하지 못한 에러가 발생했습니다.";
  console.error(err);
  // 에러 객체가 react Router에서 발생한 에러인지 확인하는 타입가드 함수
  if (isRouteErrorResponse(err)) {
    if (err.status === 404) {
      message = "존재하지 않는 페이지입니다.ㅋㅋ메롱";
    }
  }
  return (
    <div id="main">
      <div className="todo">
        <h2>에러 발생</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
