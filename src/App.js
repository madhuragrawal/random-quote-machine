import React, { useState,useRef } from "react";

function App() {

  const [colors, setColors] = useState([
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ]);

  const buttonRef = useRef();
  const aRef = useRef();

  
  const changeBg = ()=>{
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    document.body.style.color = color;
    buttonRef.current.style.background = color;
    aRef.current.style.background = color;
  }
  return (
    <div className="App" id="quote-box">
      <div className="quote-text">
        <p id="text"></p>
      </div>
      <div className="quote-author">
        <p id="author"></p>
      </div>
      <div className="buttons">
        <a
          className="button"
          id="tweet-quote"
          title="Tweet this quote!"
          target="_top"
          ref={aRef}
        >
          <i className="fa fa-twitter"></i>
        </a>
        <button ref={buttonRef} className="button" id="new-quote" onClick={() => changeBg()}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
