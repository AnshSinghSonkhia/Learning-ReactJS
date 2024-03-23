import { useState } from "react";
import "./index.css";
import Button from "./components/Button";

function App() {
  const [color, setcolor] = useState("mintcream");

  function changeColor(color) {
    setcolor(color);
  }

  return (
    <>
      <div
        className="w-full h-screen duration-200 bg-black"
        style={{ backgroundColor: color }}
      >
        <div className="inset-x-0 flex flex-wrap items-center justify-center h-full px-2 bottom-12 ">
          <div className="flex flex-wrap items-center justify-center w-auto h-20 px-2 rounded-md bg-zinc-900">
            <a onClick={() => changeColor("blue")}>
              <Button color="BLUE" />
            </a>
            <a onClick={() => changeColor("yellow")}>
              <Button color="YELLOW" />
            </a>
            <a onClick={() => changeColor("red")}>
              <Button color="RED" />
            </a>
            <a onClick={() => changeColor("mintcream")}>
              <Button color="MINTCREAM" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
