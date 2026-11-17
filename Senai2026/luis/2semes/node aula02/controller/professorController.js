 //Função responsável para mostrar os alunos
function listarProfessores(req, res){
    
    //criar uma lista simples de alunos
    const professores = [
        {
            id: 1,
            nome: "Rafael"
        },
        {
            id: 2,
            nome: "Amanda"
        },
        {
            id: 3,
            nome: "Maria"
        },
        {
            id: 4,
            nome: "luiz"
        },
        {
            id: 5,
            nome: "jasen"
        }
    ];

    //Envia a lista de alunos como uma resposta JSON
    res.json(professores);
}

//Exportando a função para que ela possa ser utilizada em outros arquivos
module.exports = {
    listarProfessores
};