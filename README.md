# 🍕 **Pizzaria Web Application - Docker**

Este projeto é uma aplicação web simples de gestão de comandas para uma pizzaria, construída utilizando **Node.js** e **SQLite**. A aplicação foi containerizada utilizando **Docker** para facilitar o processo de execução e deployment.

---

## 📋 **Funcionalidades**

- **CRUD de Comandas**: Gerencie as comandas da pizzaria com as operações de criar, listar, consultar, atualizar e excluir.
- **Banco de Dados SQLite**: Armazena as informações das comandas de forma eficiente.
- **API para Comandas**: Endpoints que permitem interagir com as comandas via API.

### **Endpoints da API**

- **`POST /comandas`**: Cria uma nova comanda.
- **`GET /comandas`**: Lista todas as comandas.
- **`GET /comandas/:id`**: Consulta uma comanda específica pelo ID.
- **`PUT /comandas/:id`**: Atualiza uma comanda existente.
- **`DELETE /comandas/:id`**: Remove uma comanda pelo ID.

---

## 🛠️ **Requisitos**

- **Docker**: Para rodar a aplicação em um container.

---

## 🚀 **Como Rodar a Aplicação**

### 1. **Obter a Imagem do Docker Hub**

Para obter a imagem da aplicação, execute o seguinte comando no terminal:

```bash
docker pull danielequerino/trabalhodocker
```

### 2. **Como rodar o container**
```bash
docker run -p 3000:3000 danielequerino/trabalhodocker
```
