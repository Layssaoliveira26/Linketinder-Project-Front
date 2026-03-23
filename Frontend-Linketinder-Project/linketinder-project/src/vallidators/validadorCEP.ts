const regexCEP = /^[0-9]{8}$/
const areaCEP = document.getElementsByClassName('areaCEP')[0] as HTMLElement;

export function validarCEP(cep: any): boolean {
    if(!cep.match(regexCEP)) {
        areaCEP.innerHTML = "Informe um CEP em um formato válido";
        return false;
    }
    return true;
}