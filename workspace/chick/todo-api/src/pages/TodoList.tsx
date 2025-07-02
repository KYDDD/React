import { useState } from "react";
import useAxiosInstance from "../hooks/useAxiosInstance";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  itemList: TodoItemType[];
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}

function TodoList({ itemList, deleteItem, toggleDone }: TodoListPropType) {
  const axiosInstance = useAxiosInstance();

  // 서버로부터 목록 수신
  // const fetchList = () => {
  //   const res = axiosInstance
  //     .get('/todolist')
  //     .then(() => {}) //fulfilled;
  //     .catch(() => {}); //rejected
  //   console.log(`서버의 응답`, res);

  //   // res는 Promise 객체로 반환
  //   // 1. pending 작업 진행 중 → 로딩 스피너나 스켈레톤 UI 표시
  //   // 2. fulfilled 작업성공
  //   // 3. rejected 작업실패
  // };

  const fetchList = async () => {
    try {
      const res = await axiosInstance.get("/todolist"); // fulfilled 상태
      console.log("서버의 응답", res.data.items);
    } catch (err) {
      console.error(err); // rejected 상태
    }
  };

  fetchList();

  const liList = itemList.map((item) => {
    return <TodoItem key={item._id} item={item} deleteItem={deleteItem} toggleDone={toggleDone} />;
  });

  return <ul className="todolist">{liList}</ul>;
}

export default TodoList;
