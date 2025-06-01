const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./products.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, price REAL)");
});

app.get('/products', (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/products', (req, res) => {
  const stmt = db.prepare("INSERT INTO products (name, price) VALUES (?, ?)");
  stmt.run(req.body.name, req.body.price, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
  stmt.finalize();
});

app.get('/health', (req, res) => res.send('OK'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log('product-service running on port ' + PORT));
