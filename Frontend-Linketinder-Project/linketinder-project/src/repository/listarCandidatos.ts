import { listaCandidados } from "./cadastrarCandidato";
let idEntrevistado = 1;

listaCandidados.push(
    {
        nome: "Ana Silva",
        email: "ana@email.com",
        cpf: "123",
        idade: "25",
        estado: "SP",
        cep: "000",
        descricaoPessoal: "",
        formacaoAcademica: "",
        competencias: "JS"
    },
    {
        nome: "Carlos",
        email: "carlos@email.com",
        cpf: "456",
        idade: "30",
        estado: "CE",
        cep: "000",
        descricaoPessoal: "",
        formacaoAcademica: "",
        competencias: "Java"
    }
);

const listagemCandidatos =
 document.getElementById('listaCandidatos') as HTMLElement;

function listarCandidatos() {

    listagemCandidatos.innerHTML = "";

    for (const candidato of listaCandidados) {

        listagemCandidatos.innerHTML += `
            <div class="undCandidato">

                <h4>Candidato ${idEntrevistado}</h4>

                <p><span>Email:</span> informação anônima</p>
                <p><span>CPF:</span> informação anônima</p>
                <p><span>Idade:</span> informação anônima</p>
                <p><span>Estado:</span> informação anônima</p>

                <p><span>Descrição:</span> ${candidato.descricaoPessoal}</p>
                <p><span>Formação:</span> ${candidato.formacaoAcademica}</p>
                <p><span>Competências:</span> ${candidato.competencias}</p>

            </div>
        `;
        idEntrevistado++;
    }
}

window.onload = () => {
    listarCandidatos();
};