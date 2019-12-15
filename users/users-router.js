const router = require('express').Router();

const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {

});

module.exports = router;