import "../styles/ui.css";
import Userinput from "./Userinput";
import React, { useState } from "react";
let Ui = (props) => {
  let [check, setcheck] = useState(false);
  let [pro, setpro] = useState(props);

  let date = props.date;
  console.log(props.tandf);

  let dd1 = String(date.getDate());
  let mm1 = String(date.getMonth() + 1);
  let yyyy1 = date.getFullYear();
  date = dd1 + "-" + mm1 + "-" + yyyy1;

  let checkbox = (event) => {
    setcheck((pervstate) => {
      return !pervstate;
    });
  };
  let pros = [props];
  let btn = (index) => {
    pros.splice(index);

    setpro(pros);
  };

  return (
    <div>
      {pro.data ? (
        <div
          className="kite "
          style={{
            border: props.tandf ? "5px solid yellow" : " 5px solid white",
          }}
        >
          <div>
            <input type="checkbox" onClick={checkbox} />
          </div>

          <div> {date} </div>
          <div style={{ textDecorationLine: check ? "line-through" : "none" }}>
            {" "}
            {props.data} <p>{props.tandf ? "Due date is passed" : ""}</p>
          </div>
          <div>
            <button onClick={btn} className="btn">Delete</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Ui;
