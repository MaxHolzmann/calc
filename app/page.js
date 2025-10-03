"use client";
import { useEffect, useState } from "react";
export default function Home() {
  let [inputValue, setInputValue] = useState("");
  let [firstValue, setFirstValue] = useState("");
  let [calcAction, setCalcAction] = useState("");
  let first = inputValue;
  /*
issues to fix:
NaN issue with too many inputs
 the logic of using the old number for continous calculation versus a new number
*/

  const handleInput = (value) => {
    if (!isNaN(value) || value === ".") {
      // Number or decimal
      setInputValue((prev) => prev + value);
    } else if (["+", "-", "*", "/", "Enter"].includes(value)) {
      if (inputValue === "" && firstValue === "") return;
      setFirstValue(inputValue || firstValue);
      setCalcAction(value);
      setInputValue("");
    } else if (value === "=" || value === "Enter") {
      if (!firstValue || !calcAction || !inputValue) return;

      const num1 = parseFloat(firstValue);
      const num2 = parseFloat(inputValue);
      let result = 0;

      switch (calcAction) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : "Error";
          break;
        default:
          break;
      }

      setInputValue(String(result));
      setFirstValue("");
      setCalcAction("");

      //clear and del values for button functionality
    } else if (value === "Clear") {
      setInputValue("");
      setFirstValue("");
      setCalcAction("");
    } else if (value === "Del") {
      setInputValue((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
      )
        return;

      if (!isNaN(event.key) || event.key === ".") {
        handleInput(event.key);
      } else if (["+", "-", "*", "/"].includes(event.key)) {
        handleInput(event.key);
      } else if (event.key === "Enter" || event.key === "=") {
        handleInput("=");
      } else if (event.key === "Backspace") {
        handleInput("Del");
      } else if (event.key.toLowerCase() === "c") {
        handleInput("Clear");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inputValue, firstValue, calcAction]);

  useEffect(() => {
    console.log("firstValue changed:", firstValue);
  }, [firstValue]);

  useEffect(() => {
    console.log("calcAction changed:", calcAction);
  }, [calcAction]);

  useEffect(() => {
    console.log("inputValue changed:", inputValue);
  }, [inputValue]);

  return (
    <div className="bg-white h-screen">
      <header className="flex justify-center">
        <h1 className="text-black text-5xl m-5">Calculator</h1>
      </header>

      <div className="flex justify-center items-center">
        <div className="border-2 border-black rounded-lg text-black justify-center p-2 flex flex-col shadow-xl">
          {/* row 1 */}
          <div className="flex justify-center">
            <div className="border-2 border-black rounded-sm w-3/4 wrap-normal">
              {inputValue}
              <div className="text-sm">{firstValue}</div>
            </div>
            <button className="border-2 rounded-md border-black p-2 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105">
              Del
            </button>
            <button
              onClick={() => handleInput("Clear")}
              className="border-2 rounded-md border-black p-2 text-xl bg-slate-200 hover:bg-slate-100 hover:scale-105"
            >
              Clear
            </button>
          </div>

          {/* numbers and inputs */}
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
                =
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
