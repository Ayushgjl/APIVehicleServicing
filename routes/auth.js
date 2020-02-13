const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.verifyUser = (req,res, next)=>{
    let authheader = req.headers.authorization;

    if(!authheader){  
        let err = new Error('No Authentication information');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
        }
       let token = authheader.split(" ")[1];
       let data;


       try{
        data = jwt.verify(token, process.env.SECRET)
        console.log(data);
        } catch(err){
            return next(err);
        }

User.findById(data._id)
.then((user) =>{
    console.log(user);
req.user = user;
next();
}).catch(next);
}