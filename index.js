import express from 'express';
import fs from 'fs';

import {calc, kramer, updateStats, FILENAME} from './helpers';

const PORT = 8080;
const app = express()

app.use((req, res, next) => {
    updateStats();
    
    next();
});

app.get('/add/:a/:b', (req, res) => {
    const urlParams = req.params;
    
    res.send(String(calc(urlParams.a, urlParams.b, '+')));
})
.get('/subtract/:a/:b', (req, res) => {
    const urlParams = req.params;
    
    res.send(String(calc(urlParams.a, urlParams.b, '-')));
})
.get('/multiply/:a/:b', (req, res) => {
    const urlParams = req.params;
   
    res.send(String(calc(urlParams.a, urlParams.b, '*')));
})
.get('/divide/:a/:b', (req, res) => {
    const urlParams = req.params;
    
    res.send(String(calc(urlParams.a, urlParams.b, '/')));
})
.get('/pow/:a/:b', (req, res) => {
    const urlParams = req.params;
    
    res.send(String(calc(urlParams.a, urlParams.b, '^')));
})
.get('/kramer/:a1/:b1/:c1/:a2/:b2/:c2/', (req, res) => {
    const urlParams = req.params;
    
    res.send(kramer(urlParams));
})
.get('/stats', (req, res) => {
    fs.readFile(FILENAME, (err, data) =>{
        if (err) throw err;
        
        res.send(String(data));
    });
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}...`)
})

