const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const client = require('prom-client');
const app = express();
const register = new client.Registry();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./orders.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, user_id INTEGER, product TEXT)");
});

app.post('/orders', (req, res) => {
  const stmt = db.prepare("INSERT INTO orders (user_id, product) VALUES (?, ?)");
  stmt.run(req.body.user_id, req.body.product, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
  stmt.finalize();
});

app.get('/orders', (req, res) => {
  db.all("SELECT * FROM orders", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/orders/history/:user_id', (req, res) => {
  db.all("SELECT * FROM orders WHERE user_id = ?", [req.params.user_id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/health', (req, res) => res.send('OK'));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log('order-service running on port ' + PORT));


client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});