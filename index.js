import express from 'express';
import {calc, kramer} from './helpers';

const PORT = 8081;
const app = express()

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
});

app.use((req, res) => {
   res.sendStatus(404);
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}...`)
})

