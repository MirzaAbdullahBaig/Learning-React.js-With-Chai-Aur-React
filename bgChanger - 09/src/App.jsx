import { useState } from "react";
import Button from "./Components/Button";
import Btndata from "./Data/Btndata";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-5 rounded-3xl">
          {Btndata.map(({colorEnter, text, bgcolor}) => {
            return (
              <Button
                setColor={setColor}
                colorEnter={colorEnter}
                text={text}
                bgcolor={bgcolor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;