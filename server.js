import http from "http";

const PORT = 3000;

const routes = {
  "/": "Curso de node.js!",
  "/livros": "Entrei na rota de livros!",
  "/autores": "Entrei na rota de autores!",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}...`);
});
