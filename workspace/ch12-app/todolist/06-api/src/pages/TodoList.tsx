import { Link } from "react-router";
import TodoListItem from "./TodoListItem";
import type { TodoItem } from "./TodoInfo";
import { useEffect, useState } from "react";
import useAxiosInstance from "@hooks/useAxiosInstance";

interface TodoList {
  items: TodoItem[];
}

function TodoList() {
  //axios 인스턴스 가져오기 (baseURL, headers등 기본값이 세팅되어 있어서 편리하게 사용가능)
  const axiosInstance = useAxiosInstance();
  const [data, setData] = useState<TodoList | null>(null);

  //할일 목록을 API 서버에서 조회
  const fetchTodoList = async () => {
    console.log("API 서버에 목록 요청");
    //TODO API 서버에 목록 요청
    try {
      const res = await axiosInstance.get<TodoList>("/todolist");
      setData(res.data);
    } catch (err) {
      console.error(err);
      alert("할일 목록 조회에 실패했습니다");
    }
  };

  //삭제 처리
  const handleDelete = async (_id: number) => {
    console.log("API 서버에 삭제 요청", _id);
    // TODO API 서버에 삭제 요청
    try {
      await axiosInstance.delete(`/todolist/${_id}`);
      alert("삭제가 완료되었습니다.");

      // TODO API 서버에 목록 요청
      fetchTodoList();
    } catch (err) {
      console.error(err);
      alert("할일 삭제에 실패했습니다.");
    }
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
