const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./pizzaria.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS comandas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            mesa INTEGER NOT NULL,
            cliente TEXT NOT NULL,
            pedidos TEXT NOT NULL,
            total REAL NOT NULL
        )
    `);
});


module.exports = db;