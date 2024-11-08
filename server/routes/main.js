// routes.js
const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    const locals  = {
        title: "NodeJS Blog",
        description: "Simple blog created using NodeJS and Express"
    }
    res.render('index', locals);
});

module.exports = router;
