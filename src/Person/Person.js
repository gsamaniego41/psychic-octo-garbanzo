import React from "react";
import "./Person.css";
// import { getPortPromise } from "portfinder";

const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} !
      </p>
      <p>{props.children}</p>
      <input onChange={props.changed} type="text" value={props.name} />
    </div>
  );
};

export default person;
