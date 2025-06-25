import { useRef, useState } from "react";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropsType {
  itemList: TodoItemType[];
  deleteItem: (_id: number) => void;
}

function TodoList({ itemList, deleteItem }) {
  // 샘플 목록

  const liList = itemList.map((item) => {
    return <TodoItem key={item._id} item={item} deleteItem={deleteItem}></TodoItem>;
  });

  return <ul className="todolist">{liList}</ul>;
}

export default TodoList;
