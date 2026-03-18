export class Candidato {
    nome: string;
    email: string;
    cpf: string;
    idade: string;
    estado: string;
    cep: string;
    descricaoPessoal: string;
    formacaoAcademica: string;
    competencias : string;

    constructor(nome: string, email: string, cpf: string, idade: string, estado: string, cep: string, descricaoPessoal: string, formacaoAcademica:string, competencias : string) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.idade = idade;
        this.estado = estado;
        this.cep = cep;
        this.descricaoPessoal = descricaoPessoal;
        this.formacaoAcademica = formacaoAcademica;
        this.competencias = competencias;
    }
}

