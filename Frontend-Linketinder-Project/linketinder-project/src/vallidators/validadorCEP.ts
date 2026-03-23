const regexCEP = /^[0-9]{8}$/
const areaCEP = document.getElementsByClassName('areaCEPCandidato')[0] as HTMLElement;

export function validarCEP(cep: any) {
    if(!cep.match(regexCEP)) {
        areaCEP.innerHTML = "Informe um CEP em um formato válido";
    }
}