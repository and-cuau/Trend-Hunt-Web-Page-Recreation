const express = require('express');
const path = require('path');
const app = express();

// Serve static files (e.g., frontend assets)
app.use(express.static(path.join(__dirname, 'public')));

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Catch-all route to serve your SvelteKit app (for production build)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
