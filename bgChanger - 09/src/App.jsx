import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-5 rounded-3xl">
          <button
            onClick={() => {
              setColor("#dc2626");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("#16a34a");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600"
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("#2563eb");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600"
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("#9333ea");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-600"
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("#65a30d");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-lime-600"
          >
            Lime
          </button>
          <button
            onClick={() => {
              setColor("#4b5563");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-600"
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor("#ca8a04");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-600"
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("#db2777");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-600"
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("#475569");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-slate-600"
          >
            Slate
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black"
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("#cbd5e1");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-slate-300"
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
