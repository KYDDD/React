import Todo from "./pages/Todo.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Reaction from "./reaction.js";

function App(){
  const initItemList = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  const [itemList, setItemList] = Reaction.useState(initItemList);

  

  function addItem(title) {
    console.log("할일 추가");

    const item = {
      num: itemList[itemList.length-1]?.num + 1 || 1,
      title,
      done: false,
    };

    setItemList([ ...itemList, item ]); //기존의 세개 플러스 하나가 추가된 새로운 배열로 
    
  }

  

  // 완료/미완료 처리
  function toggleDone(num) {
    console.log(num, "완료/미완료");
  
    const newItemList = itemList.map( item =>{ return item.num === num ? { ...item, done:!item.done } : item })

    // 화면 갱신, done 값에 따라서 <s> 추가 또는 삭제
    setItemList( newItemList );
  }      

  // 할일 삭제
  function deleteItem(num) {
    console.log(num, "할일 삭제");
    
    // num 이 아닌애들만 필터링 해서 새로운 배열로 만든다. = 해당 num 을 삭제한다.
    const newItemList = itemList.filter( item => item.num !== num);
    setItemList(newItemList);
  }
  
  return (
    Reaction.createElement('div', { id: 'todo' }, 
      Header,
      Todo({  itemList , addItem, toggleDone, deleteItem}),
      Footer
    )
  );
}

export default App;