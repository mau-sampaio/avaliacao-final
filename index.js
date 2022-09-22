const curso = require("./modulos/curso");

//Informações do CURSO:
console.log(`O nome do curso é: ${ curso.nomeCurso}.`)
console.log(`A nota de aprovação precisa ser igual ou acima de: ${ curso.notaAprovacao}.`)
console.log(`Neste curso para ser aprovado, o aluno precisa ter menos que: ${ curso.faltasMax} faltas.`)

//Informações dos ALUNOS:
console.log("\r\nEsses são os alunos matriculados no momento:\r\n")

curso.adicionarAluno("Pedro",3,[9,7,6]);

curso.listaEstudantes.find((aluno)=>{
    return aluno.nome == "Pedro"
}).faltas();

curso.listaEstudantes.forEach((aluno)=>{
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Quantidade de Faltas: ${aluno.qtdFaltas}`);
    console.log(`As notas são: ${aluno.notas}`);
    console.log(`A média de suas notas é: ${aluno.calcularMedia()}`);
    console.log(`Situação no curso: ${curso.aprovado(aluno) ? "Aprovado" : "Reprovado"}\r\n`)
})
