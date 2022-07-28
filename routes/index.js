const express = require('express');
const router = express.Router();

router
    .get( '/iecho', (req, res) => {
        let str = '';
        let polindrome = false;
        if ( req.query.hasOwnProperty('text')){
            str = req.query.text.split('').reverse().join('');
            if (!str.localeCompare(req.query.text))
                polindrome = true;
            res.status(200).json({
                text: str,
                polindrome
            });
        }else
            res.status(400).json({ "error": "no text" });    
    })

module.exports = router;