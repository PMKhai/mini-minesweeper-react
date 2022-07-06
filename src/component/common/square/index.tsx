import { useState, ReactElement } from "react";

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square = (props: SquareProps): ReactElement => {
  const [displayValue, setDisplayValue] = useState('')
  const activeClass = displayValue && "active";
  return (
    <button
      className={`square ${activeClass}`}
      onClick={() => setDisplayValue(props.value)}
    >
      {displayValue}
    </button>
  );
};

export default Square;
