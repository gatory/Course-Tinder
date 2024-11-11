/*import React, { useEffect, useState ,useRef} from 'react';
import './App.css';
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars" 


const Submit  = () => {
  const inputRef = useRef();
  /*var jsonData = {
    "users": [
        {
            "name": "alan", 
            "age": 23,
            "username": "aturing"
        },
        {
            "name": "john", 
            "age": 29,
            "username": "__john__"
        }
    ]
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    fetch('http://localhost:5002/api', {

      method: 'POST', 
      mode: 'cors', 
      
      body: JSON.stringify({time: inputValue}) 

    })
  }
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
    <div className="person-gif">
      <div className="positioned-time">
      <TimePickerComponent placeholder="Select a Time" />
      </div>
      <Submit />
    </div>
  );
}*/
import React, { useState, useRef } from 'react';
import './App.css';

const Submit = () => {
  const inputRef = useRef();
  const [message, setMessage] = useState(""); // State to store the message from the backend

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;

    try {
      const response = await fetch('http://localhost:5002/api', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json', // Ensure content type is set to JSON
        },
        body: JSON.stringify({ time: inputValue }), // Send the time as part of the request body
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Get the response body from the server
      setMessage(data.message); // Display the message from the backend
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('Failed to send data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="get-time" style={{ marginRight: '10px' }}>Time:</label>
        <input id="get-time" type="text" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
      {message && <p>{message}</p>} {/* Display the message from the backend */}
    </form>
  );
};

export default function App() {
  return (
    <div>
      <Submit />
    </div>
  );
}
