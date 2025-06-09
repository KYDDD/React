interface ButtonProps {
  children: string;
  color?: string;
  textColor?: string;
  onClick: (event: React.MouseEvent) => void;
}

function Button({ children, color, textColor, onClick: handleClick }: ButtonProps) {
  return (
    <button type="button" onClick={handleClick} style={{ backgroundColor: color, color: textColor }} className="rounded-button">
      {children}
    </button>
  );
}

export default Button;
