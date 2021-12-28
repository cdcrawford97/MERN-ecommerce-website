const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.SECRET_KEY
        ).toString()
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if(!user) {
            res.status(401).json("Incorrect email or password. Please try again.");
            return
        };

        const decryptedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET_KEY
        );

        const originalPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);
        
        if (originalPassword !== req.body.password) {
            res.status(401).json("Incorrect email or password. Please try again.");
            return;
        };

        const { password, ...others } = user._doc;

        res.status(200).json(others);

    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router