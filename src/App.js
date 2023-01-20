import "./App.css";
import React from "react";

function App() {
  const [moveOn, setMoveOn] = React.useState(0);

  const handleClick = (event) => {
    if (event.target.id === "after") {
      //if we are on 3rd slide - move to 1st, else just move forward on 300px
      moveOn > -600
        ? setMoveOn((prev) => prev - 300)
        : setMoveOn((prev) => prev + 600);
    } else {
      //if we are om 1st slide - move to 3rd, else just move backward on 300px
      moveOn < 0 ? setMoveOn((prev) => prev + 300) : setMoveOn((prev) => prev - 600);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick} id="before">
        Before
      </button>
      <div className="row">
        <div
          style={{
            backgroundColor: "red",
            width: "200px",
            marginLeft: "200px",
            //"move" line:
            transform: `translateX(${moveOn}px)`,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "red",
            width: "200px",
            height: "100px",
            //"move" line:
            transform: `translateX(${moveOn}px)`,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "red",
            width: "200px",
            //"move" line:
            transform: `translateX(${moveOn}px)`,
          }}
        ></div>
      </div>
      <button onClick={handleClick} id="after">
        After
      </button>
    </div>
  );
}

export default App;
