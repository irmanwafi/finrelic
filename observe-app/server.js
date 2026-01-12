const express = require('express');
const healthRoutes = require('./routes/health');
const testRoutes = require('./routes/test');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/health', healthRoutes);
app.use('/api', testRoutes);

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
