import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}`~.,";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-xl rounded-lg px-8 py-6 my-16 bg-gray-900">
        <h1 className="text-green-400 text-center text-3xl font-bold mb-6">
          Password Generator
        </h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-6 bg-gray-800">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-gray-800 text-gray-300 text-lg placeholder-gray-500"
            placeholder="Your secure password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-green-500 text-gray-900 font-semibold px-4 py-3 hover:bg-green-400 transition"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-wrap gap-y-4 gap-x-4 text-base">
          <div className="flex items-center gap-x-3">
            <input
              className="cursor-pointer accent-green-500"
              type="range"
              min={6}
              max={99}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-gray-300 font-medium">
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="cursor-pointer accent-green-500"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-gray-300 font-medium">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              className="cursor-pointer accent-green-500"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label
              htmlFor="characterInput"
              className="text-gray-300 font-medium"
            >
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
