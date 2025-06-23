import { Link } from "react-router";
import TodoListItem from "./TodoListItem";
import type { TodoItem } from "./TodoInfo";
import { useEffect, useState } from "react";

interface TodoList {
  items: TodoItem[];
}

const dummyData: TodoList = {
  items: [
    {
      _id: 1,
      title: "잠자기",

      done: true,
      createdAt: "2025.06.16 16:49:00",
      updatedAt: "2025.06.16 16:49:00",
    },
    {
      _id: 2,
      title: "자바스크립트 복습",

      done: false,
      createdAt: "2025.06.17 16:49:00",
      updatedAt: "2025.06.17 16:49:00",
    },
  ],
};
function TodoList() {
  const [data, setData] = useState<TodoList | null>(null);

  //할일 목록을 API 서버에서 조회
  const fetchTodoList = () => {
    console.log("API 서버에 목록 요청");
    //TODO API 서버에 목록 요청

    //더미 데이터로 지정
    setData(dummyData);
  };

  //삭제 처리
  const handleDelete = (_id: number) => {
    console.log("API 서버에 삭제 요청", _id);
    // TODO API 서버에 삭제 요청

    alert("삭제가 완료되었습니다.");

    // TODO API 서버에 목록 요청
    fetchTodoList();
  };

  useEffect(() => {
    fetchTodoList();
  }, []); //빈 배열을 전달해서 마운트 시에만 호출

  const itemList = data?.items.map((item) => <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />);
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/add">추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">{itemList}</ul>
      </div>
    </div>
  );
}

export default TodoList;
