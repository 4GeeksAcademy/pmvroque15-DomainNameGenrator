/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let articles = ["the", "an", "some", "another", "any"];
  let adjectives = [
    "awesome",
    "cool",
    "intriguing",
    "thrilling",
    "addicting",
    "fun"
  ];
  let nouns = ["website", "blog", "webapp", "spot", "hub"];
  let tlds = [
    ".com",
    ".de",
    ".org",
    ".space",
    ".rocks",
    ".meow",
    ".cat",
    ".dog"
  ];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          console.log(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }
};
