import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addvalue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(counter)
    }
  };

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter)
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  );
}

export default App;
