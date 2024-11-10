import React, { useEffect, useState ,useRef} from 'react';
import './App.css';
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars"


const Submit = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Name submitted: ' + inputRef.current.value);
    const time = inputRef.toString();
    fetch("http://localhost:5000/api", {
      method: "POST",
      mode: "cors",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(time)
    }).then(()  =>{
      console.log('request made.');
    })
  };
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit}>
      <div>
         <label htmlFor="get-time" style={{marginRight: '10px'}}>Time:</label>
         <input id="get-time" type="text" ref={inputRef} />
        </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default function App() {
  const [message, setMessage, setInputValue, inputValue] = useState("");
  return (
    <div>
       <div className="positioned-time"> 
      <TimePickerComponent placeholder="Select a Time" />
      </div>
      <Submit />
    </div>
  );
}