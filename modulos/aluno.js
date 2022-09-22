function Aluno(nome,qtdFaltas,notas){
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    
    this.calcularMedia = () => {
        const soma = this.notas.reduce((acumulador,nota)=>{
            return  acumulador+nota
        },0)
        return (soma/notas.length).toFixed(1);
    };

    this.faltas = () => {
        this.qtdFaltas++
    };
}

module.exports = Aluno;