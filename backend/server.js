/*const express = require('express');
const body = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5002;
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5175', // React app URL
    methods: 'GET,POST',            // Allow specific HTTP methods
    allowedHeaders: 'Content-Type', // Allow headers that are needed
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.post('/api', (req,res) => {
    console.log("Request received ", req.body);
    res.json({
        message: 'Received data successfully!',
        receivedData: req.body
      });
});*/
const express = require('express');
const bodyParser = require('body-parser');  // Corrected the import
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5002;
let timeValue = null;

// Middleware
app.use(bodyParser.json()); // To parse JSON bodies
app.use(cors({
  origin: 'http://localhost:5175', 
  methods: 'GET, POST',           // Allow specific HTTP methods
  allowedHeaders: 'Content-Type', // Allow necessary header
  credentials: true  
}));

// POST route to handle incoming requests
app.post('/api', (req, res) => {
    const requestBody = req.body;  // The incoming request body (JavaScript object)
  
    // Extract the time field (if it exists)
    const newTimeValue = requestBody.time;
  
    // Check if time value exists and is valid
    if (newTimeValue) {
      // Update the global variable with the new time value
      timeValue = newTimeValue;
  
      // Log the time value to the console (optional for debugging)
      console.log('Time value received and saved:', timeValue);
  
      // Send a response back to the client
      res.json({
        message: 'Received and saved time successfully!',
        receivedTime: timeValue // Echo the received time back to the frontend
      });
    } else {
      // If no "time" field was provided in the request body
      console.log('No time field provided in the request body');
      res.status(400).json({ message: 'No time data provided' });
    }
  /*console.log("Request received: ", req.body); // Log the request body
  // Send a response back to the client
  res.json({
    message: 'Received data successfully!',
    receivedData: req.body
  });*/

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

