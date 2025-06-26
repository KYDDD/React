import { atom } from "jotai";

// 초기값만 넘겨주면, Read-write atom
// export const countAtom = atom(6); //상태 하나를 정의

// Read-only atom
export const countAtom = atom(6);

// export const getCountAtom = atom(
//   (get) => get(countAtom) // read함수
//   // () => {} //write함수를 지정하지 않으면 읽기 전용
// ); //상태 하나를 정의

// write-only atom
export const countDownAtom = atom(
  null, //read 함수 - null일 경우 "읽기 불가능"을 의미
  (get, set, step: number) => {
    const count = get(countAtom);
    set(countAtom, count - step);
  } //write함수
);
