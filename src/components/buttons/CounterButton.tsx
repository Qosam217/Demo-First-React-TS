import { useState } from "react";
// :import PropTypes from "prop-types";

// interface: validate input at compile time
interface CounterButtonProps {
  initNumber: number;
}

const CounterButton: React.FC<CounterButtonProps> = ({ initNumber }) => {
  const [count, setCount] = useState(initNumber);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

// .propTypes validate input at runtime
// great when it needed pull data at runtime like from api
// seems deprecated
// CounterButton.propTypes = {
//   initNumber: PropTypes.number.isRequired,
// };

export default CounterButton;
