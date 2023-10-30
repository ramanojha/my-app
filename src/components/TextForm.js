import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    let textInUpperCase = text.toUpperCase();
    setText(textInUpperCase);
  };

  const onChangeEvent = (event) => {
    setText(event.target.value);
  };

  const toLowerCase = () => {
    let toLowerCase = text.toLowerCase();
    setText(toLowerCase);
  };

  const toClearText = () => {
    setText("");
  };
  //Search event To handle Later
  const searchOccurance = () =>{
    //TODO:
  };

  const searchInput = (event) => {
    //TODO:
  };
  
  return (
    <div>
      <form>
        <div className="form-group">
          <textarea
            className="w-50 form-control my-3"
            value={text}
            placeholder="Enter text to analyze"
            onChange={onChangeEvent}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <h6>
          <small>
            {(text.length ==0)? 0 :text.split(" ").length} words and {text.length} characters.
            Requires {(text.length ==0)? 0 :text.split(" ").length * .008} minutes to read.
          </small>
        </h6>
        <h6>
          <small>
            () occurances in text.
          </small>
        </h6>
        <button
          className="btn btn-outline-success my-2 my-sm-0 mr-2"
          onClick={toClearText}
          type="button"
        >
          ClearText
        </button>
        <button
          className="btn btn-outline-success my-2 my-sm-0 mr-2"
          onClick={toUpperCase}
          type="button"
        >
          UpperCase
        </button>
        <button
          className="btn btn-outline-success my-2 my-sm-0 mr-2"
          onClick={toLowerCase}
          type="button"
        >
          LowerCase
        </button>
        <input className="mr-2 my-3 w-25" type="search" onChange={searchInput} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={searchOccurance} type="button">Search Occurances</button>
      </form>
    </div>
  );
}
