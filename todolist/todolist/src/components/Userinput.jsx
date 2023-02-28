import React, { useState } from "react";
import "../styles/userinput.css";
import Ui from "./ui";

let Userinput = (props) => {
  let [uservar, setuservar] = useState("");
  let [datavar, setdatavar] = useState(true);
  let [inputdate, setinputdate] = useState("");
  let [datetrue, setdatetrue] = useState("");

  let date = new Date(inputdate);

  let currentdate = new Date();

  console.log(currentdate, "currentdate1");

  let submit = (event) => {
    event.preventDefault();
  };
  let userinput = (event) => {
    setuservar(event.target.value);
  };
  let datechange = (event) => {
    setinputdate(event.target.value);
  };

  console.log(date, "date");
  console.log(currentdate, "currentdate");

  let userinputclick = (event) => {
    if (date < currentdate) {
      setdatetrue(true);
    } 
    else {
      setdatetrue(false)
    }
    let obj = {
      tandf: datetrue,
      data: uservar,
      date: new Date(inputdate),
    };

    if (uservar.trim().length > 0) {
      props.onLift(obj);
      setdatavar(true);
    } else {
      setdatavar(false);
    }

    setuservar("");
  };

  return (
    <div className="inputdiv">
      <form onSubmit={submit}>
        <div className="todolist"> TO DO LIST</div>
        <label htmlFor="" className="text">
          Text
        </label>
        <input
          type="text"
          onChange={userinput}
          className="input"
          style={{ borderColor: datavar ? "black" : "Magenta" }}
          value={uservar}
        />
        <div>
          <label className="text">Date</label>
          <input
            type="date"
            className="input"
            onChange={datechange}
            value={datetrue}
          />
        </div>
        <div className="btndiv">
          {" "}
          <button type="submit" className="btn" onClick={userinputclick}>
            submit
          </button>
        </div>
      </form>

      <div></div>
    </div>
  );
};
export default Userinput;
