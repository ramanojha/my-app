import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    console.log("UpperCases is clicked");
    
    let textInUpperCase = text.toUpperCase();
    setText(textInUpperCase);
    
  };

  const onChangeEvent = (event) => {
    console.log("Text is going to be updated");
    setText(event.target.value);
  };

  const toLowerCase = ()=>{
    console.log("To Lower case");
    let toLowerCase = text.toLowerCase();
    setText(toLowerCase);
  }
  return (
    <div>
      <form>
        <p>{props.heading}</p>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text"
            onChange={onChangeEvent}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button
          className="btn btn-outline-success my-2 my-sm-0 mr-2"
          onClick={toUpperCase}
          type="button"
        >
          To UpperCase
        </button>
        <button
          className="btn btn-outline-success my-2 my-sm-0 mr-2" 
          onClick={toLowerCase}
          type="button"
        >
          To LowerCase
        </button>
      </form>
    </div>
  );
}
