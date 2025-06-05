import Title from "./components/Title";
import TodoList, {type TodoItem} from "./pages/todo/List";

// Title, TodoList의 부모 컴포넌트
function App() {
  const list: TodoItem[] = [
    { _id: 1, title: "React 공부", done: false },
    { _id: 2, title: "javascript 프로젝트", done: true },
    { _id: 3, title: "javascript 공부", done: true },
  ];

  return (
    <div id="app">
      <div>
        <Title />
        <Title titleName="타이틀 1" />
        <Title titleName="타이틀 2" />
        <TodoList list={list} />
      </div>
    </div>
  );
}

export default App;
