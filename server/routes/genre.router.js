const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/genres', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM "genres" ORDER BY "name" ASC;`
  pool.query(queryText)
      .then(result => {
        res.send(result.rows);
      }).catch(err =>{
        console.log('error: get all genres', err);
        res.sendStatus(500);
      });
  
});

module.exports = router;