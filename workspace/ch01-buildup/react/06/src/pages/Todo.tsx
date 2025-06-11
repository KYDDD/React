import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import type { TodoItem } from "./TodoItem";
   
   function Todo(){
       const initItemList: TodoItem[] = [
        { num: 1, title: "자바스크립트 공부", done: true },
        { num: 2, title: "JS 프로젝트", done: true },
        { num: 3, title: "React 공부", done: false },
      ];

      const [itemList, setItemList] = React.useState(initItemList);

      // let lastNum = itemList.length;

     

      // 할일 추가
      function addItem(title: string) {
        console.log("할일 추가");
        // 데이터 갱신, itemList에 item 추가
        // num, title, done 속성을 가진 item 객체 생성
        const item: TodoItem = {
          num: itemList[itemList.length-1]?.num + 1 || 1,
          title,
          done: false,
        };

        // 객체의 불변성을 유지하기 위한 코드, 빈용지는 빈용지로 만들어졌으면 계속해서 빈용지로 놔두는 것이다.
        setItemList([...itemList, item]);

        // itemList.push(item);

        // setItemList([ ...itemList ]);
      }

      
      // 완료/미완료 처리
      function toggleDone(num: number) {
        console.log(num, "완료/미완료");
        // 데이터 갱신, itemList에서 num에 해당하는 item의 done 값을 수정
        // itemList에서 num 값으로 item 조회
        // let selectedItem;
        // itemList.forEach((item) => {
        //   if (item.num === num) {
        //     selectedItem = item;
        //   }
        // });

        // const selectedItem = itemList.find((item) => {
        //   return item.num === num;
        // });
        // console.log(selectedItem);

        // // item의 done 값을 수정
        // selectedItem.done = !selectedItem.done;
        // setItemList([...itemList]);

        //객체의 불변성을 위해서, 기존의 객체는 수정되지 않도록
        const newItemList = itemList.map(item => item.num === num ? { ...item, done: !item.done } : item);
        setItemList(newItemList);
      }

      // 할일 삭제
      function deleteItem(num: number) {
        console.log(num, "할일 삭제");
        // 데이터 갱신, itemList에서 num에 해당하는 item 삭제
        // const index = itemList.findIndex((item) => {
        //   return item.num === num;
        // });
        const newItemList = itemList.filter(item => item.num !== num);
        setItemList(newItemList);
        // itemList.splice(index, 1);
        // setItemList(itemList);

      }
      
      return(
        <div id="main">
          <div id="container">
            <ul>
              <li>
                <h2>쇼핑 목록</h2>
                <TodoInput addItem={ addItem } />
                <TodoList itemList = { itemList } toggleDone={toggleDone} deleteItem={deleteItem} />
              </li>
            </ul>
          </div>
        </div>
      )
    }

export default Todo