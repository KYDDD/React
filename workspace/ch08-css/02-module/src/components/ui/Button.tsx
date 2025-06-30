import styles from "./Button.module.css";

//원래 html버튼이 쓸수있는 속성들을 상속
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bg?: string;
}

function Button({ children, bg, color, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[`bg-${bg}-text-${color}`]}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
