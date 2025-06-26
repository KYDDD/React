import { atom } from "jotai";
import { countAtom } from "./atoms";

export const doubleCountAtom = atom((get) => get(countAtom) * 2);
export const dualdoubleCountAtom = atom((get) => get(doubleCountAtom) * 2);
