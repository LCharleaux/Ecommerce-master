const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('empty_cart');
});

module.exports = router;