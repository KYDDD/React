import { Link } from "react-router";
import type { TodoItem } from "./TodoInfo";

interface TodoListItemProps {
  item: TodoItem;
  handleDelete: (_id: number) => void;
}

function TodoListItem({ item, handleDelete }: TodoListItemProps) {
  return (
    <>
      <li>
        <span>{item._id}</span>
        <Link to={`/list/${item._id}`}>{item.done ? <s>{item.title}</s> : item.title}</Link>
        <button type="button" onClick={() => handleDelete(item._id)}>
          삭제
        </button>
      </li>
    </>
  );
}

export default TodoListItem;
