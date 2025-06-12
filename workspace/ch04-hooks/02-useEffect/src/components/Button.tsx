import "./Button.css";

interface ButtonProps {
  children: string;
  type?: "button" | "reset" | "submit";
  color?: "red" | "green" | "blue";
  onClick: (event: React.MouseEvent) => void;
}
// : 를 사용한건 변수명 변경하겠다는의미이다, = 는 기본값지정
function Button({ children, type = "button", color, onClick: handleClick }: ButtonProps) {
  return (
    <button type={type} onClick={handleClick} style={{ backgroundColor: color }} className="rounded-button">
      {children}
    </button>
  );
}

export default Button;
