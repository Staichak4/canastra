const { funcionarios } = require("./data");

const deletarFuncionarios = (req, res) => {
    const { id } = req.params;
    const index = funcionarios.findIndex((f) => f.id == id);

    if (index === -1) {
        return res.status(404).send("Funcionário não encontrado.");
    };

    const funcionarioDeletado = funcionarios.splice(index, 1)[0];

    res.status(200).send({
        mensagem: "FUncionário deletado com sucesso.",
        funcionarios: funcionarioDeletado
    });
};

module.exports = deletarFuncionarios;