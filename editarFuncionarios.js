const { funcionarios } = require("./data");

const editarFuncionarios = (req, res) => {
    const { id } = req.params;
    const novoNome = req.body.nome;
    const novoCargo = req.body.cargo;
    const novoDepartamento = req.body.departamento;
    const novoSalario = req.body.salario;

    const funcionario = funcionarios.find((f) => f.id == id);

    if (!funcionario) {
        return res.status(404).send({mensagem: "Funcionário não encontrado."})
    }

    funcionario.nome = novoNome;
    funcionario.cargo = novoCargo;
    funcionario.departamento = novoDepartamento;
    funcionario.salario = novoSalario;
    res.status(200).send({mensagem: "Funcionário editado com sucesso."})
}

module.exports = editarFuncionarios;