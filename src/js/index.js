//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let seconds = 0;
setInterval(function(){
  ReactDOM.render(<Home tiempo={seconds}/>, document.querySelector("#app"))
  seconds++;
}, 1000)



