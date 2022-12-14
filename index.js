const express = require('express');
const router = require('./routes');
const PORT = process.env.PORT || 3001;

const app = express();	

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.get('/', (req, res) => { res.status(200).send('ok')});

app.use('/api', router);
app.listen(PORT, () => console.log('listening on port ' +PORT));