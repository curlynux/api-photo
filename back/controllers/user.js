const bcrypt = require("bcrypt");
const User = require("../models/Users.js");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) =>
{
    bcrypt.hash(req.body.password, 10)
    .then(hash => 
    {
        const user = new User({email: req.body.email, password: hash});
        user.save()
        .then(() => res.status(201).json({message: "utilisateur créé !"}))
        .catch((error) => 
        {
            console.error(`c'est une bad request 1 ! ${error}`)
            res.status(400).json({error})
        });
        console.log("user created");
    })
    .catch((error) => 
    {
        console.log(`this is req: ${req}`);
        console.log(`this is req body: ${req.body}`);
        console.error(` c'est une erreur 1 ! ${error}`);
        res.status(500).json({error})
    });
}

exports.login = (req, res, next) =>
{
    User.findOne({email: req.body.email})
    .then(user => 
    {
        if(!user === null)
            return res.status(401).json({message: "email/mdp incorrect"})
        else
        {
            bcrypt.compare(req.body.password, user.password)
            .then(valid => 
            {
                if(!valid)
                    return res.status(401).json({message: "email/mdp incorrect"})
                else
                {
                    res.status(200).json({
                        userId: user._id, token: jwt.sign({ userId: user._id },
                        "RANDOM_TOKEN_SECRET", {expiresIn: '24h'})
                    });   
                }
            })
            .catch((error) => 
            {
                console.log(user);
                console.error(`cet une erreur 2 ! ${error}`)
                res.status(500).json({error})
            });
        }
    })
    .catch((error) => 
    {
        console.error(`cet une erreur 3 ! ${error}`)
        res.status(500).json({error})
    });
}