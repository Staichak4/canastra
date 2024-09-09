const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const adicionarFuncionario = require("./adicionarFuncionario");
const listarFuncionarios = require("./listarFuncionarios");
const editarFuncionarios = require("./editarFuncionarios");
const deletarFuncionarios = require("./deletarFuncionarios");
const buscarFuncPorSalario = require("./buscarFuncPorSalario");

app.post("/funcionario", adicionarFuncionario);

app.get("/funcionario", listarFuncionarios);

app.get("/funcionario/salario", buscarFuncPorSalario);

app.put("/funcionario/:id", editarFuncionarios);

app.delete("/funcionario/:id", deletarFuncionarios);

app.get("/", (req, res) => {
    res.send("Servidor express funcionando");
});

app.listen(port, () => {
    console.log(`Sistema rodando em localhost:${port}`);
});