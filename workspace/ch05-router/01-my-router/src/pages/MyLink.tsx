interface MyLinkProps {
  //children속성은 이렇게 정의해주면 된다
  children: React.ReactNode;
  to: string;
}

function MyLink({ children, to }: MyLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 브라우저의 기본 동작(페이지 이동) 취소
    e.preventDefault();

    //브라우저의 주소창에는 새로운 URL이 표시되고
    //History Api를 사용해서 주소 변경과 히스토리에 추가
    //pushstate를 사용하면
    history.pushState(null, "", to);

    //이전 URL은 브라우저의 히스토리에 쌀이며
    //URL 변경되었음을 알리는 popstate이벤트를 수동으로 발생
    //APP 컴포넌트에서 이 이벤트를 감지해서 URL에 맞는 화면을 리렌더링
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
export default MyLink;
