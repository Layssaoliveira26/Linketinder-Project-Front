const regexCPF = /^[0-9]{11}$/;
const areaCPF = document.getElementsByClassName('areaCPFCandidato')[0] as HTMLElement;

export function validadorCPF(cpf: any) {
    if(!cpf.match(regexCPF)) {
        areaCPF.innerHTML = "Informe um CPF em um formato válido";
    }
    
        
}

