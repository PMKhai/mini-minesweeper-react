import { ReactElement } from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
};

const Button = (props: ButtonProps): ReactElement => <button onClick={props.onClick}>{props.text}</button>;

export default Button;