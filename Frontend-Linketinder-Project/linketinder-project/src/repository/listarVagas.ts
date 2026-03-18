import type { tipoListaVaga } from "../types/tiposVaga";

let idVaga = 1;
let listaVagas: tipoListaVaga = [];

listaVagas.push(
    {
        titulo: "Desenvolvedor Web",
        nivel: "junior",
        requisitos: ["javasscript", "java"],
        beneficios: ["auxilio home office", "day off"],
        empresa: "google"
    },
    {
        titulo: "Desenvolvedor de Web",
        nivel: "junior",
        requisitos: ["javasscript", "java"],
        beneficios: ["auxilio home office", "day off"],
        empresa: "aws"
    }
);

const listagemVagas = document.getElementById('listaVagas') as HTMLElement;

function listarVagas() {

    listagemVagas.innerHTML = "";

    for (const vaga of listaVagas) {

        listagemVagas.innerHTML += `
            <div class="undCandidato">

                <h4>Vaga ${idVaga}</h4>

                <p><span>Titulo:</span> ${vaga.titulo}</p>
                <p><span>Nivel:</span> ${vaga.nivel}</p>
                <p><span>Requisitos:</span> ${vaga.requisitos}</p>
                <p><span>Beneficios:</span> ${vaga.beneficios}</p>
                <p><span>Empresa:</span> dado anônimo</p>
            </div>
        `;
        idVaga++;
    }
}

window.onload = () => {
    listarVagas();
};