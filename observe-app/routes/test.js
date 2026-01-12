const express = require('express');
const router = express.Router();

router.get('/fast', (req, res) => {
  res.json({
    message: 'Fast response',
    timestamp: new Date().toISOString()
  });
});

router.get('/slow', (req, res) => {
  setTimeout(() => {
    res.json({
      message: 'Slow response',
      timestamp: new Date().toISOString()
    });
  }, 3000);
});

router.get('/error', (req, res) => {
  throw new Error('Intentional error for testing');
});

router.get('/random', (req, res) => {
  if (Math.random() < 0.5) {
    throw new Error('Random error occurred');
  }
  res.json({
    message: 'Success',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
