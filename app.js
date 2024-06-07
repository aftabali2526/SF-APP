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
    }else if((type == "CIF") && (value !== null || value !== undefined ) && value == "7892585" ){
        fs.readFile('CIF_Data_6.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    }else if((type == "CIF") && (value !== null || value !== undefined ) && value == "1234567" ){
        fs.readFile('CIF_Data_8.json', 'utf8', (err, data) => {
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
    }else if(customerName.toLowerCase().includes("afaq") && emailAddress.toLowerCase().includes("hotmail")){
        fs.readFile('CIF_Data_4.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if(mobileNumber.toLowerCase().includes("0554538343")){
        fs.readFile('CIF_Data_7.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if(nationalId.toLowerCase().includes("789632541254785")){
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
        fs.readFile('No_Result.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }
     
});





app.post('/api/sf/getAccount', (req, res) => {
    // Extract user data from request body
    const { channelid, userid, password,terminalId,messageType,dateTime,tranCode,stan } = req.headers;
    const { cif, externalId } = req.body;
    console.log(JSON.stringify(req.headers));
    // Validate request data (for demonstration purposes)
    if (!channelid || !userid || !password) {
        return res.status(400).json({ error: 'Missing header fields' });
    }

    if (!cif) {
        return res.status(400).json({ error: 'Missing required fields, cif in request' });
    }

    
    if((cif !== null && cif !== undefined ) && cif == "4567893" ){
        fs.readFile('AccountJson.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if((cif !== null && cif !== undefined ) && cif == "9632585" ){
        fs.readFile('AccountJson_1.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if((cif !== null || cif !== undefined ) && cif == "7892585" ){
        fs.readFile('AccountJson_3.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else{
        fs.readFile('No_Result.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }
     
});


app.post('/api/sf/getAccountsDetails', (req, res) => {
    // Extract user data from request body
    const { channelid, userid, password,terminalId,messageType,dateTime,tranCode,stan } = req.headers;
    const { externalID, cif } = req.body;
    console.log(JSON.stringify(req.headers));
    // Validate request data (for demonstration purposes)
    if (!channelid || !userid || !password) {
        return res.status(400).json({ error: 'Missing header fields' });
    }

    if (!externalID) {
        return res.status(400).json({ error: 'Missing required fields, externalID in request' });
    }

    
    if((externalID !== null && externalID !== undefined ) && externalID == "456781428"){
        fs.readFile('Account_Details.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if((externalID !== null && externalID !== undefined ) && externalID == "456789264"){
        fs.readFile('Checking_Account_Details.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if((externalID !== null && externalID !== undefined ) && externalID == "456783296"){
        fs.readFile('Tdr_Account_Details.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if((externalID !== null && externalID !== undefined ) && externalID == "456785493"){
        fs.readFile('Loan_Account_Details.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if((externalID !== null && externalID !== undefined ) && externalID == "456782543"){
        fs.readFile('CreditCard_Details.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if((externalID !== null && externalID !== undefined ) && externalID == "456781475"){
        fs.readFile('Auto_Loan_Account_Details.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else if((externalID !== null && externalID !== undefined ) && externalID == "456786951"){
        fs.readFile('Mortgage_Account_Details.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }else{
        fs.readFile('No_Result.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'No Result' });
                return;
            }
          return  res.status(200).json(JSON.parse(data));
        });
    }
     
});


app.post('/api/sf/financialTransactions', (req, res) => {
    // Extract user data from request body
    const { channelid, userid, password,terminalId,messageType,dateTime,tranCode,stan } = req.headers;
    const { externalId, fromDate, toDate,minAmount,maxAmount,numberOfTransactions,cardNumber, type,financialRecordType } = req.body;
    console.log(JSON.stringify(req.headers));
    // Validate request data (for demonstration purposes)
    if (!channelid || !userid || !password) {
        return res.status(400).json({ error: 'Missing header fields' });
    }

    
    if(externalId !== null && externalId != undefined && externalId !== '' && (externalId == "456789264" || externalId == "456781428")  && type !== null && type !== undefined &&  type !== '' && type == 'mini statement'){
        fs.readFile('mini-statement.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    }else if(numberOfTransactions !== null && numberOfTransactions != undefined && numberOfTransactions !== '' && numberOfTransactions == '10' && (externalId == "456789264" || externalId == "456781428")){
        fs.readFile('last-10.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    }else if(numberOfTransactions !== null && numberOfTransactions != undefined && numberOfTransactions !== '' && numberOfTransactions == '50' && (externalId == "456789264" || externalId == "456781428")){
        fs.readFile('last-50.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    }else if(financialRecordType !== null && financialRecordType !== undefined && financialRecordType == 'Loan Account' && type !== null && type !== undefined && type == 'all'){
        fs.readFile('loantransaction.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            return  res.status(200).json(JSON.parse(data));
        });
    }else if(externalId !== null && externalId != undefined && externalId !== '' && (externalId == "456782543" || externalId == "456782543") && financialRecordType !== null && financialRecordType !== undefined && financialRecordType == 'Credit Card' && numberOfTransactions == '10'){
        fs.readFile('Credit-Card.json', 'utf8', (err, data) => {
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


app.post('/api/sf/creditCardDetails', (req, res) => {
    // Extract user data from request body
    const { channelid, userid, password,terminalId,messageType,dateTime,tranCode,stan } = req.headers;
    const { creditCardNumber } = req.body;
    console.log(JSON.stringify(req.headers));
    // Validate request data (for demonstration purposes)
    if (!channelid || !userid || !password) {
        return res.status(400).json({ error: 'Missing header fields' });
    }

    if (!creditCardNumber) {
        return res.status(400).json({ error: 'Missing required fields, type or value in request' });
    }

    
    if(creditCardNumber !== null && creditCardNumber != undefined && creditCardNumber !== '' && creditCardNumber == "4562858963258745"){
        fs.readFile('CreditCard_Details.json', 'utf8', (err, data) => {
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

app.post('/api/sf/updateCardStatus', (req, res) => {
    // Extract user data from request body
    const { channelid, userid, password,terminalId,messageType,dateTime,tranCode,stan } = req.headers;
    const { cardNumber, oldStatus, newStatus, externalId } = req.body;
    console.log(JSON.stringify(req.headers));
    // Validate request data (for demonstration purposes)
    if (!channelid || !userid || !password) {
        return res.status(400).json({ error: 'Missing header fields' });
    }

    if (!cardNumber) {
        return res.status(400).json({ error: 'Missing required fields, cardNumber in request' });
    }

    
    if(cardNumber !== null && cardNumber != undefined && cardNumber !== '' && cardNumber == '4587525855569852' && externalId == '159263487'){
        fs.readFile('CreditCard_Details.json', 'utf8', (err, data) => {
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


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
