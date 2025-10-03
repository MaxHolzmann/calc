"use client";
import { useEffect, useState } from "react";
export default function Home() {
  let [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.value !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        let entry = Number(event.key);
        console.log(event.key);
        if (!isNaN(entry) && event.key !== " ") {
          setInputValue((prevValue) => prevValue + event.key);
        } else if (event.key === "Backspace") {
          setInputValue((prevValue) => prevValue.slice(0, -1));
        } else {
          console.log("Not a number, not entering.");
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="bg-white h-screen">
      <header className="flex justify-center">
        <h1 className="text-black text-5xl m-5">Calculator</h1>
      </header>

      <div className="flex justify-center items-center">
        <div className="border-2 border-black rounded-lg text-black justify-center p-2 flex flex-col shadow-xl">
          {/* row 1, clear and delete and entering the numbers*/}
          <div className="flex justify-center">
            <p className="border-2 border-black rounded-sm">{inputValue}</p>
            <button className="border-2 rounded-md border-black p-2 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
              Del
            </button>
            <button className="border-2 rounded-md border-black p-2 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
              Clear
            </button>
          </div>

          {/* row 2-4 will be even grids of 4*/}
          <div className="flex justify-center flex-col items-center">
            <div className="grid grid-cols-4 gap-3 p-2">
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                7
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                8
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                9
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                +
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                4
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                5
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                6
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105 ">
                -
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105 ">
                1
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105 ">
                2
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                3
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105 ">
                *
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                0
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                .
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                ?
              </button>
              <button className="border-2 rounded-md border-black p-5 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
                /
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
