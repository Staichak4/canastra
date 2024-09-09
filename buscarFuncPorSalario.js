const { funcionarios } = require("./data");

const buscarFuncPorSalario = (req, res) => {
    const { salario } = req.query;

    const resultados = funcionarios.filter(funcionario => funcionario.salario == salario);

    if (resultados == undefined) {
        return res.status(404).send({message: "Salário não encontrado."});
    };

    res.status(200).send(resultados);
};

module.exports = buscarFuncPorSalario;