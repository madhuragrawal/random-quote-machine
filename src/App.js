import React from "react";

function App() {
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
        >
          <i className="fa fa-twitter"></i>
        </a>
        <button className="button" id="new-quote">
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
