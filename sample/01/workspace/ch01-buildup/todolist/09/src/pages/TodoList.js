import Reaction from "../reaction.js";
import TodoItem from "./TodoItem.js";


function TodoList({ itemList, toggleDone, deleteItem }){ //구조분해 할당으로 필요한 속성만 지정
  const items = itemList.map(item => TodoItem({ item, toggleDone, deleteItem }));
  return(
    Reaction.createElement('ul', { class: 'todolist' }, items)
  );
}

export default TodoList