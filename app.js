const express = require("express");
const bodyFormat = require("body-parser");
const cors = require("cors");
const db = require("./database");
const app = express();
const porta = 3000;

app.use(bodyFormat.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send('Seja bem vindo a pizzaria!')
});


app.post("/comandas", (request, response) => {
  const { mesa, cliente, pedidos, total } = request.body;

  db.run(
    `INSERT INTO comandas (mesa, cliente, pedidos, total) VALUES (?, ?, ?, ?)`,
    [mesa, cliente, JSON.stringify(pedidos), total],

    function (error) {
      if(error) 
        return response.status(500).json({ error: error.message });
      response.status(201).json({ id: this.lastID });
    }
  );
});

app.get("/comandas", (request, response) => {
  db.all(
    `SELECT * FROM comandas`, [], (error, rows) => {
    if (error)
        return response.status(500).json({ error: error.message });
    response.json(rows);
  });
});

app.get("/comandas/:id", (request, response) => {
  const id = request.params.id;

  db.get(
    `SELECT * FROM comandas WHERE id = ?`, [id], (error, row) => {
    if (error) 
        return response.status(500).json({ error: error.message });
    if (!row)
      return response.status(404).json({ error: "Comanda não cadastrada." });
    response.json(row);
  });
});

app.put("/comandas/:id", (request, response) => {
  const { id } = request.params;
  const { mesa, cliente, pedidos, total } = request.body;

  db.run(
    `UPDATE comandas SET mesa = ?, cliente = ?, pedidos = ?, total = ? WHERE id = ?`,
    [mesa, cliente, JSON.stringify(pedidos), total, id],
    function (error) {
      if (error) 
        return response.status(500).json({ error: error.message });
      if (this.changes === 0)
        return response.status(404).json({ error: "Comanda não encontrada" });
      response.json({ atualizado: true });
    }
  );
});

app.delete("/comandas/:id", (request, response) => {
  const { id } = request.params;
  db.run(
    `DELETE FROM comandas WHERE id = ?`, [id], 
    function (error) {
        if (error) 
            return response.status(500).json({ error: error.message });
        if (this.changes === 0)
            return response.status(404).json({ error: "Comanda não encontrada" });
        response.json({ deletado: true });
  });
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
