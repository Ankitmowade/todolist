import React, { useState } from "react";
import List from "./components/list";
import "./App.css";
import Userinput from "./components/Userinput";

let Dummy = [
  {
    tandf: true,
    data: "walk",
    date: new Date(2022, 7, 25),
  },

  {
    tandf: true,
    data: "talk",
    date: new Date(2022, 5, 18),
  },
];

function App(props) {
  let [liftvar, setlift] = useState(Dummy);

  let lift = (values) => {
    // console.log(values.data)
    setlift((prevestate) => {
      return [values, ...prevestate]; // in a var
    });
  };

  return (
    <div>
      <Userinput onLift={lift} />
      <List values={liftvar} />
    </div>
  );
}

export default App;
