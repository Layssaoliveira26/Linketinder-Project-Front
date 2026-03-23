const regexCPF = /^[0-9]{11}$/;
const areaCPF = document.getElementsByClassName('areaCPF')[0] as HTMLElement;

export function validadorCPF(cpf: any): boolean {
    if(!cpf.match(regexCPF)) {
        areaCPF.innerHTML = "Informe um CPF em um formato válido";
        return false;
    }
    return true;
        
}

