import Left3 from "@/components/Left3";
import { useEffect } from "react";
import type { LeftProps } from "./Left1";

function Left2({ count }: LeftProps) {
  useEffect(() => {
    console.log("### Left2 렌더링.");
  });
  return (
    <div>
      <h2>Left2</h2>
      <Left3 count={count} />
    </div>
  );
}

export default Left2;
