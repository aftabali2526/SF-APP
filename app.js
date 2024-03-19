// Import required modules
const express = require('express');
const fs = require('fs');

// Create Express application
const app = express();
const port = 80;
app.use(express.json());
app.use(express.static('public'));
// Define route to fetch data from static JSON file
app.get('/api/data', (req, res) => {
    console.log("print data: ");
    // Read data from static JSON file
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        // Parse JSON data and send it in response
        res.json(JSON.parse(data));
    });
});

// Define route to fetch specific data item by ID
app.get('/api/data/:id', (req, res) => {
    // Read data from static JSON file
    console.log("print test: ");
    const id = req.params.id;
   console.log("print : " + id);
    if((id !== null || id !== undefined ) && id == "4567893" ){
        fs.readFile('CIF_Data.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json(JSON.parse(data));
        });
    }else if((id !== null || id !== undefined ) && id == "9632585" ){
        fs.readFile('CIF_Data_1.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json(JSON.parse(data));
        });
    }
    
});

app.post('/api/sf/customerSearch', (req, res) => {
    // Extract user data from request body
    const { channelid, userid, password,terminalId,messageType,dateTime,tranCode,stan } = req.headers;
    const { type, value, } = req.body;
    console.log(JSON.stringify(req.headers));
    // Validate request data (for demonstration purposes)
    if (!channelid || !userid || !password) {
        return res.status(400).json({ error: 'Missing header fields' });
    }

    if (!type || !value ) {
        return res.status(400).json({ error: 'Missing required fields, type or value in request' });
    }

    
    if((type == "CIF") && (value !== null || value !== undefined ) && value == "4567893" ){
        fs.readFile('CIF_Data.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    }else if((type == "CIF" || type == "AccountNumber" ) && (value !== null || value !== undefined ) && (value == "9632585" || value == "10000000159")){
        fs.readFile('CIF_Data_1.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    }else {
        fs.readFile('Error.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    }
     
});

app.post('/api/sf/advanceCustomerSearch', (req, res) => {
    // Extract user data from request body
    const { channelid, userid, password,terminalId,messageType,dateTime,tranCode,stan } = req.headers;
    const { customerName, mobileNumber, customerType,emailAddress,passportNumber,nationalId} = req.body;
    // Validate request data (for demonstration purposes)
    if (!channelid || !userid || !password) {
        return res.status(400).json({ error: 'Missing header fields' });
    }

    
    if (!customerName && !mobileNumber && !emailAddress && !passportNumber && !nationalId ) {
        return res.status(400).json({ error: 'Missing required fields in request' });
    }

    
   if(customerName.toLowerCase().includes("ameer") && mobileNumber.toLowerCase().includes("586947581")){
        fs.readFile('CIF_Data_3.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if(customerName.toLowerCase().includes("ameer") && emailAddress.toLowerCase().includes("test")){
        fs.readFile('CIF_Data_4.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if(mobileNumber.toLowerCase().includes("586947581")){
        fs.readFile('CIF_Data_3.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if(nationalId.toLowerCase().includes("789632541258523")){
        fs.readFile('CIF_Data_3.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if(passportNumber.toLowerCase().includes("f555")){
        fs.readFile('CIF_Data_5.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else{
        fs.readFile('CIF_Data_5.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }
     
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
