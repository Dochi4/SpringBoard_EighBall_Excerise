import React , { useState }from "react";
import MessageSelect from "./MessageSelect.js";

const EightBall = () => {
  const [message, setMessage] = useState({
    msg: "Think of a Question",
    color: "black"
  });
  
  const handleClick = () =>{
    setMessage(MessageSelect())
  }
  const circleStyle = {
    borderRadius: "50%",   
    width: "200px",
    height: "200px",padding: "10px",
    backgroundColor: message.color,
    fontFamily: "Sans-Serif",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer"
  };

  return (
    <>
    <h1>Eight Ball </h1>
    <div onClick = {() => handleClick()} style = {circleStyle} >
      <b >{message.msg}</b>
    </div>
    </>
  );
};

export default EightBall;