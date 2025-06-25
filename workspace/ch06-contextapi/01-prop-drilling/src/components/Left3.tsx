import { useEffect } from "react";
import type { LeftProps } from "./Left1";

function Left3({ count }: LeftProps) {
  useEffect(() => {
    console.log("#### Left3 렌더링.");
  });
  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
