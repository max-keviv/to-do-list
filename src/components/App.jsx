import React, { useState } from "react";

function App() {
  const [item, setItem] = useState([]);
  const [flag, setFlag] = useState("");
  // let arr = [];
  function onchange(event) {
    const newValue = event.target.value;
    setFlag(newValue);
    console.log(flag);
    // console.log(newValue)

    //  setItem(()=>{

    // });
  }
  function onclick() {
    setItem((prevalue) => {
      return [...prevalue, flag];
    });
    console.log(item);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="itemAdd"
          onChange={onchange}
          type="text"
          value={flag}
        ></input>
        <button name="btn" onClick={onclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
