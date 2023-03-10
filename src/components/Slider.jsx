import "../styles/Slider.css";
import React from "react";

function Slider() {
  const [moveOn, setMoveOn] = React.useState(0);
  const [activeButton, setActiveButton] = React.useState("0");

  const handleClick = (event) => {
    if (event.target.id === "after") {
      //if we are on 3rd slide - move to 1st, else just move forward on 300px
      if (moveOn > -600) {
        setMoveOn((prev) => prev - 300);
        //We work with ID param, so we need String result, +() - convert to Number
        setActiveButton((prev) => String(+prev + 1));
      } else {
        setMoveOn((prev) => prev + 600);
        setActiveButton("0");
      }
    } else {
      //if we are om 1st slide - move to 3rd, else just move backward on 300px
      if (moveOn < 0) {
        setMoveOn((prev) => prev + 300);
        //We work with ID param, so we need String result, +() - convert to Number
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

  console.log(activeButton);

  return (
    <>
      <button onClick={handleClick} id="before">
        Before
      </button>
      <div className="row">
        <div
          id="first"
          style={
            activeButton === "0"
              ? {
                  //"move" line  &  blur changing:
                  transform: `translateX(${moveOn}px)`,
                  filter: "blur(0)",
                }
              : {
                  transform: `translateX(${moveOn}px)`,
                  filter: "blur(5px)",
                }
          }
        ></div>
        <div
          id="second"
          style={
            activeButton === "1"
              ? {
                  //"move" line  &  blur changing:
                  transform: `translateX(${moveOn}px)`,
                  filter: "blur(0)",
                }
              : {
                  transform: `translateX(${moveOn}px)`,
                  filter: "blur(5px)",
                }
          }
        ></div>
        <div
          id="third"
          style={
            activeButton === "2"
              ? {
                  //"move" line  &  blur changing:
                  transform: `translateX(${moveOn}px)`,
                  filter: "blur(0)",
                }
              : {
                  transform: `translateX(${moveOn}px)`,
                  filter: "blur(5px)",
                }
          }
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
    </>
  );
}

export default Slider;
