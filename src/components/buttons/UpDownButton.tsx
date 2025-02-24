import { useReducer } from "react";

// useReducer handle more complex state logic than useState

const initState = { count: 0 };

interface State {
  count: number;
}

type Action = { type: "increase" } | { type: "decrease" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const UpDownButton = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <p>Count: {state.count}</p>
    </div>
  );
};
