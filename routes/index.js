const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('API online na porta: '+ process.env.PORT);
});

router.post('/', (req, res) => {
  res.send('API online na porta: '+ process.env.PORT);
});

module.exports = router;
