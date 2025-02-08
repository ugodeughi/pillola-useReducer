import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Azione non riconosciuta");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="d-flex flex-column align-items-center">
      <p>Conteggio: {state.count}</p>
      <div>
        <button className="btn btn-success m-3 fs-2" onClick={() => dispatch({ type: "increment" })}>+</button>
        <button className="btn btn-success m-3 fs-2" onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button className="btn btn-success m-3" onClick={() => dispatch({ type: "reset" })}>🔄 Reset</button>
      </div>
    </main>
  );
}

export default App;