import "./App.css";
import React from "react";

function App() {
  const [moveOn, setMoveOn] = React.useState(0);
  const [activeButton, setActiveButton] = React.useState("0");

  const handleClick = (event) => {
    if (event.target.id === "after") {
      //if we are on 3rd slide - move to 1st, else just move forward on 300px
      if (moveOn > -600) {
        setMoveOn((prev) => prev - 300);
        //+() - convert to Number
        setActiveButton((prev) => String(+prev + 1));
      } else {
        setMoveOn((prev) => prev + 600);
        setActiveButton("0");
      }
    } else {
      //if we are om 1st slide - move to 3rd, else just move backward on 300px
      if (moveOn < 0) {
        setMoveOn((prev) => prev + 300);
        //+() - convert to Number
        setActiveButton((prev) => String(+prev - 1));
      } else {
        setMoveOn((prev) => prev - 600);
        setActiveButton("2");
      }
    }
  };

  const handleClickActive = (event) => {
    return setActiveButton(event.target.id);
  };
  React.useEffect(() => {
    //+() - convert to Number
    setMoveOn(-300 * +activeButton);
  }, [activeButton]);

  return (
    <div className="App">
      <button onClick={handleClick} id="before">
        Before
      </button>
      <div className="row">
        <div
          id="first"
          style={{
            //"move" line:
            transform: `translateX(${moveOn}px)`,
          }}
        ></div>
        <div
          id="second"
          style={{
            //"move" line:
            transform: `translateX(${moveOn}px)`,
          }}
        ></div>
        <div
          id="third"
          style={{
            //"move" line:
            transform: `translateX(${moveOn}px)`,
          }}
        ></div>
      </div>
      <button onClick={handleClick} id="after">
        After
      </button>
      <div className="buttons">
        <button
          id="0"
          className="circles"
          style={activeButton === "0" ? { backgroundColor: "green" } : null}
          onClick={handleClickActive}
        ></button>
        <button
          id="1"
          className="circles"
          style={activeButton === "1" ? { backgroundColor: "green" } : null}
          onClick={handleClickActive}
        ></button>
        <button
          id="2"
          className="circles"
          style={activeButton === "2" ? { backgroundColor: "green" } : null}
          onClick={handleClickActive}
        ></button>
      </div>
    </div>
  );
}

export default App;
