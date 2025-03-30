const express = require("express");
const router = express.Router();

router.post('/signup', (req, res) => {
  const data = req.body;
    try {
        console.log("data :", data)
        res.json({status:200, detail: "SingUp Sucessfull"})
    } catch (error) {
        console.error('Error : ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', (req, res) => {
  const data = req.body;
    try {
        console.log("data :", data)
        res.json({status:200, detail: "Login Sucessfull"})
    } catch (error) {
        console.error('Error : ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;