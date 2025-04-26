import express from "express";
import connectDb from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const connection = await connectDb();
connection.on("error", (error) => {
  console.error("Connection error...", error);
});
connection.once("open", () => {
  console.log("Connection established!");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de node.js!");
});

app.get("/livros", async (req, res) => {
  const livros = await livro.find({});
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscarLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado.");
});

app.put("/livros/:id", (req, res) => {
  const index = buscarLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  excluirLivro(req.params.id);
  res.status(200).send("Livro removido.");
});

export default app;
