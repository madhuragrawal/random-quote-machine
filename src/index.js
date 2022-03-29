import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./Footer";
import $ from "jquery";

var currentQuote = "";
var currentAuthor = "";
let quotesData;

function getQuotes() {
  var settings = {
    url: "https://type.fit/api/quotes",
    method: "GET",
    timeout: 0,
  };
  return $.ajax(settings).done(function (jsonQuotes) {
    quotesData = JSON.parse(jsonQuotes);
  });
}

function getRandomQuote() {
  return quotesData[Math.floor(Math.random() * quotesData.length)];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.text;
  currentAuthor = randomQuote.author;

  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );
  $(".quote-text #text").text(randomQuote.text);
  $(".quote-author #author").html(randomQuote.author);
  // var color = Math.floor(Math.random() * colors.length);
  // $("html body").css("background-color", colors[color]);
  // $("html body").css("color", colors[color]);
  // $(".button").css("background-color", colors[color]);
}

$(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $("#new-quote").on("click", getQuote);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
