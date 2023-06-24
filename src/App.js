import "./styles.css";
import { useState } from "react";

const isIOS = /iP(hone|(o|a)d)/.test(navigator.userAgent);

export default function App() {
  const [isTouching, setIsTouching] = useState(0);

  const mouseDown = () => {
    console.log(1);
    setIsTouching(1);
  };

  const mouseUp = () => {
    console.log(0);
    setIsTouching(0);
  };

  const TouchingBox = () => {
    if (isIOS) {
      return (
        <div
          onTouchStart={mouseDown}
          onTouchEnd={mouseUp}
          id="touching-box"
          style={{
            boxSizing: "border-box",
            height: "4rem",
            width: "4rem",
            borderWidth: "4px",
            backgroundColor: "gray",
          }}
        />
      );
    } else {
      return (
        <div
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          id="touching-box"
          style={{
            boxSizing: "border-box",
            height: "4rem",
            width: "4rem",
            borderWidth: "4px",
            backgroundColor: "gray",
          }}
        />
      );
    }
  };

  return (
    <div className="App">
      <main style={{ userSelect: "none", WebkitUserSelect: "none" }}>
        <div>
          <p>touching: {isTouching}</p>

          <h3>Using branched component</h3>
          <TouchingBox />

          <h3>Using onMouse</h3>
          <div
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            id="touching-box"
            style={{
              boxSizing: "border-box",
              height: "4rem",
              width: "4rem",
              borderWidth: "4px",
              backgroundColor: "gray",
            }}
          />

          <h3>Using onTouch</h3>
          <div
            onTouchStart={mouseDown}
            onTouchEnd={mouseUp}
            id="touching-box"
            style={{
              boxSizing: "border-box",
              height: "4rem",
              width: "4rem",
              borderWidth: "4px",
              backgroundColor: "gray",
            }}
          />

          <h3>Both</h3>
          <div
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            onTouchStart={mouseDown}
            onTouchEnd={mouseUp}
            id="touching-box"
            style={{
              boxSizing: "border-box",
              height: "4rem",
              width: "4rem",
              borderWidth: "4px",
              backgroundColor: "gray",
            }}
          />
        </div>
      </main>
    </div>
  );
}
