const alunos = require("./estudantes");
const Aluno = require("./aluno");


const curso = {
    nomeCurso: "Matematica",
    notaAprovacao: 7,
    faltasMax: 5,
    listaEstudantes: alunos,

    adicionarAluno(nome,qtdFaltas,notas) {
        this.listaEstudantes.push( new Aluno(nome,qtdFaltas,notas));
    },

    aprovado(aluno) {
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.qtdFaltas < this.faltasMax) {
            return true;
        } else if (aluno.qtdFaltas == this.faltasMax && aluno.calcularMedia() >= this.notaAprovacao*0.10) {
            return true;
        } return false;
    },

    listaAprovacao() {
        return this.listaEstudantes.map((aluno) => {
            return this.aprovado(aluno)
        })
    }
};

module.exports = curso;