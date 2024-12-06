import React, { useState } from "react";
function Rotateimage() {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const [rotation, setRotation] = useState(0);
  return (
    <>
      <div>
        <img
          src={pic}
          style={{
            width: ${width}px,
            height: ${height}px,
            transform: rotate(${rotation}deg),
            transition:
              "transform 0.5s ease, width 0.5s ease, height 0.5s ease",
          }}
        />
      </div>
      <button
        type="button"
        onClick={() => setRotation((rotation) => rotation + 45)}
      >
        Rotate
      </button>
      <button type="button" onClick={() => setWidth((width) => width + 50)}>
        Increase Width
      </button>
      <button type="button" onClick={() => setHeight((height) => height + 50)}>
        Increase Height
      </button>
    </>
  );
}
export default Favoriteimage;

// style={{
//     width: width + "px",
//     height: height + "px",
//     transform: "rotate(" + rotation + "deg)"
// }}


