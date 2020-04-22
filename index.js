var React = require("react");
var ReactDOM = require("react-dom");

import App from "./App"

var date = new Date().getHours();
console.log(date);

const fname = "Lija";
const lname = "Alex";
const luckynum = 7;
const year = 2019;
const img1 = "https://picsum.photos/200";

const customStyle = {
  color: "grey",
  fontSize: "20px",
  border: "1px solid black"
};
customStyle.color = "blue";
const customStyle1 = {
  color: "grey"
};

let greeting;
if (date >= 0 && date < 12) {
  greeting = "good morning";
  customStyle1.color = "green";
} else if (date >= 12 && date < 3) {
  greeting = "good afternoon";
  customStyle1.color = "orange";
} else {
  greeting = "good evening";
  customStyle1.color = "indigo";
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
