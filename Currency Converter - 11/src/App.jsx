import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-10">Currency Converter!</h1>
    </>
  );
}

export default App;
