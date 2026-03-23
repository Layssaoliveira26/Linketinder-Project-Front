import type { tipoListaEmpresas } from "../types/tiposEmpresa";
import { validarCEP } from "../vallidators/validadorCEP";
import { validadorEmail } from "../vallidators/validadorEmail";

let listaEmpresas: tipoListaEmpresas = [];

export function cadastrarEmpresa(event?: Event): void {

    event?.preventDefault();

    const emailValido = validadorEmail((document.getElementById('emailEmpresa') as HTMLInputElement).value);
    const cepValido = validarCEP((document.getElementById('cepEmpresa') as HTMLInputElement).value);
        
    if(emailValido && cepValido) {
        let empresa = {

        nome: (document.getElementById('nomeEmpresa') as HTMLInputElement).value,
        emailCorporativo: (document.getElementById('emailEmpresa') as HTMLInputElement).value,
        cnpj: (document.getElementById('cnpjEmpresa') as HTMLInputElement).value,
        pais: (document.getElementById('paisEmpresa') as HTMLInputElement).value,
        estado: (document.getElementById('estadoEmpresa') as HTMLInputElement).value,
        cep: (document.getElementById('cepEmpresa') as HTMLInputElement).value,
        descricaoEmpresa: (document.getElementById('descricaoEmpresa') as HTMLTextAreaElement).value

    };

    listaEmpresas.push(empresa);
    }

    console.log(listaEmpresas);
    limparFormEmpresa();
}


function limparFormEmpresa(): void {

    (document.getElementById('nomeEmpresa') as HTMLInputElement).value = '';
    (document.getElementById('emailEmpresa') as HTMLInputElement).value = '';
    (document.getElementById('cnpjEmpresa') as HTMLInputElement).value = '';
    (document.getElementById('paisEmpresa') as HTMLInputElement).value = '';
    (document.getElementById('estadoEmpresa') as HTMLInputElement).value = '';
    (document.getElementById('cepEmpresa') as HTMLInputElement).value = '';
    (document.getElementById('descricaoEmpresa') as HTMLTextAreaElement).value = '';

}


const formularioEmpresa = document.getElementById("formEmpresa") as HTMLFormElement;

formularioEmpresa.addEventListener("submit", cadastrarEmpresa);