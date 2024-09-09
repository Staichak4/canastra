const { funcionarios } = require("./data")

const listarFuncionarios = (req, res) => {
    res.status(200).send(funcionarios);
};

module.exports = listarFuncionarios;