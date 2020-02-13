const express = require('express');
const router = express.Router();
const alcohol = require('../model/Bike');

router.route('/')
.get((req,res,next)=>{
    alcohol.find()
    .then((alcohols)=>{
        res.json(alcohols);
    }).catch(next);
})

.post((req,res,next)=>{
    alcohol.create(req.body)
.then((alcohols)=>{
    res.json(alcohols);
}).catch(next);
});

router.route('/:id')
.get((req,res,next)=>{
    alcohol.findById(req.params.id)
    .then((alcohols) =>{
    res.json(alcohols);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
});

module.exports = router;