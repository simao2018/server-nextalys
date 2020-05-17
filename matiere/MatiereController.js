let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.json());
let Matiere = require('./Matiere');

router.get('/',(req,res)=>{
    Matiere.getMatiere((err,rows)=>{
        if(err){
            res.status(400).json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',(req, res)=>{
    Matiere.createMatiere(req.body,(err,count)=>{
        if(err){
            res.status(400).json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = router;
