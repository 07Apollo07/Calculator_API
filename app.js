const express = require('express');
const app = express();
app.use(express.json())

app.post('/add', (req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2
    let sum = n1+n2;
    res.send(`${sum}`);
})

app.post('/sub', (req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2
    let sum = n1-n2;
    res.send(`${sum}`);
})
app.post('/mul', (req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2
    let sum = n1*n2;
    res.send(`${sum}`);
})

app.listen(3000);

module.exports = app;