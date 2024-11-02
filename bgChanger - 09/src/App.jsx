import { useState } from "react";
import Button from "./Components/Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-5 rounded-3xl">
          <Button setColor={setColor} colorEnter={"#dc2626"} text={"Red"} bgcolor={"bg-red-600 text-white"} />
          <Button setColor={setColor} colorEnter={"#16a34a"} text={"Green"} bgcolor={"bg-green-600 text-white"}/>
          <Button setColor={setColor} colorEnter={"#2563eb"} text={"Blue"} bgcolor={"bg-blue-600 text-white"}/>
          <Button setColor={setColor} colorEnter={"#9333ea"} text={"Purple"} bgcolor={"bg-purple-600 text-white"}/>
          <Button setColor={setColor} colorEnter={"#65a30d"} text={"Lime"} bgcolor={"bg-lime-600 text-white"}/>
          <Button setColor={setColor} colorEnter={"#4b5563"} text={"Gray"} bgcolor={"bg-gray-600 text-white"}/>
          <Button setColor={setColor} colorEnter={"#ca8a04"} text={"Yellow"} bgcolor={"bg-yellow-600 text-white"}/>
          <Button setColor={setColor} colorEnter={"#db2777"} text={"Pink"} bgcolor={"bg-pink-600 text-white"}/>
          <Button setColor={setColor} colorEnter={"#475569"} text={"Slate"} bgcolor={"bg-slate-600 text-white"}/>
          <Button setColor={setColor} colorEnter={"black"} text={"Black"} bgcolor={"bg-black text-white"}/>
          <Button setColor={setColor} colorEnter={"#cbd5e1"} text={"White"} bgcolor={"bg-slate-300 text-blak"}/>
        </div>
      </div>
    </div>
  );
}

export default App;