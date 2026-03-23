import type { tipoListaCandidatos } from "../types/tiposCandidato"
import { validarCEP } from "../vallidators/validadorCEP";
import { validadorCPF } from "../vallidators/validadorCPF";
import { validadorEmail } from "../vallidators/validadorEmail";

export let listaCandidados: tipoListaCandidatos = [];

export function cadastrarCandidato(event?: any): void {

    event?.preventDefault()

    // if(validacoesFormulario) {

    // }
    validadorCPF((document.getElementById('cpfCandidato') as HTMLInputElement).value);
    validadorEmail((document.getElementById('emailCandidato') as HTMLInputElement).value);
    validarCEP((document.getElementById('cepCandidato') as HTMLInputElement).value);
    

    let candidato = {
        nome: (document.getElementById('nomeCandidato') as HTMLInputElement).value,
        email: (document.getElementById('emailCandidato') as HTMLInputElement).value,
        cpf: (document.getElementById('cpfCandidato') as HTMLInputElement).value,
        idade: (document.getElementById('idadeCandidato') as HTMLInputElement).value,
        estado: (document.getElementById('estadoCandidato') as HTMLInputElement).value,
        cep: (document.getElementById('cepCandidato') as HTMLInputElement).value,
        descricaoPessoal: (document.getElementById('descricaoCandidato') as HTMLTextAreaElement).value,
        formacaoAcademica: (document.getElementById('formacaoCandidato') as HTMLTextAreaElement).value,
        competencias: (document.getElementById('competenciasCandidato') as HTMLSelectElement).value,
    }

    listaCandidados.push(candidato);
    console.log(listaCandidados)
    limparFormCandidato();

}

function limparFormCandidato(): void {

        (document.getElementById('nomeCandidato') as HTMLInputElement).value = '';
        (document.getElementById('emailCandidato') as HTMLInputElement).value = '';
        (document.getElementById('cpfCandidato') as HTMLInputElement).value = '';
        (document.getElementById('idadeCandidato') as HTMLInputElement).value = '';
        (document.getElementById('estadoCandidato') as HTMLInputElement).value = '';
        (document.getElementById('cepCandidato') as HTMLInputElement).value = '';
        (document.getElementById('descricaoCandidato') as HTMLTextAreaElement).value = '';
        (document.getElementById('formacaoCandidato') as HTMLTextAreaElement).value = '';
        (document.getElementById('competenciasCandidato') as HTMLSelectElement).value = '';

}

// const formularioCandidato = document.getElementById("formCandidato") as HTMLFormElement;

// formularioCandidato.addEventListener("submit", cadastrarCandidato);

const formularioCandidato =
    document.getElementById("formCandidato") as HTMLFormElement | null;

if (formularioCandidato) {
    formularioCandidato.addEventListener(
        "submit",
        cadastrarCandidato
    );
}