import { Link } from "react-router-dom";
import "./Button2.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZE = ["btn--medium", "btn--large"];

interface Button2Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonStyle?: string;
  buttonSize?: string;
}

export const Button2: React.FC<Button2Props> = ({
  children,
  type = "button",
  onClick,
  buttonStyle = STYLES[0],
  buttonSize = SIZE[0],
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};
