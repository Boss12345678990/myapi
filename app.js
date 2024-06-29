const express = require('express');
const app = express();
const db = require('./database');
const port = 8080;

app.use(express.json());

app.post('/fruit', (req, res)=>{
    const createfruit = req.body.fruit_name;
    db.query(`insert into fruit (fruit_name)
              value (?)`,  [createfruit], (err, result)=>{
                if(err){
                    res.status(500).send(err);
                }
                res.send('row created');
                res.status(200).json({id: result.insertId, fruit_name});
              });
});
app.get('/fruit', (req, res)=>{
    db.query(`select * from fruit`, (err, result)=>{
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});
app.get('/fruits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`select * from fruit 
              where id = ?`, [id], (err, result) =>{
                if(err){
                    res.status(500).send(err);
                }
                res.status(200).send(result);
              });    
});
app.put('/fruits/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const updatefruit = req.body.fruit_name;
    db.query(`update fruit
              set fruit_name = ?
              where id = ?`, [id, updatefruit], (err, result)=>{
                if(err){
                    res.status(500).send(err);
                }
                res.send('row updated!')
                res.status(200).send(result);
              });
});
app.delete('/fruits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`delete from fruit
              where id = ?`, [id], (err, result) =>{
                if(err){
                    res.status(500).send(err);
                }
                res.send('row deleted!')
                res.status(200).send(result);
              });
});
app.listen(port, ()=>{
    console.log('server running');
});