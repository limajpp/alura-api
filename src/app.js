import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

const buscarLivro = function (id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
};

const excluirLivro = function (id) {
  return livros.splice(buscarLivro(id), 1);
};

app.get("/", (req, res) => {
  res.status(200).send("Curso de node.js!");
});

app.get("/livros", (req, res) => {
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
