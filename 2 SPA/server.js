'use strict';

const express = require('express');
 
//constantes

const PORT = 4200;
const HOST = '192.168.0.1'; 

//App

const app = express();
app.get('/',(req,res) => {
    res.send('index.html');
});

app.listen(PORT,HOST);
console.log(`ejecutando en http://${HOST}:${PORT}`);