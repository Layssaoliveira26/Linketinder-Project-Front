const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const areaEmail = document.getElementsByClassName('areaEmailCandidato')[0] as HTMLElement;

export function validadorEmail(email: any) {
    if(!email.match(regexEmail)) {
        areaEmail.innerHTML = "Informe um e-mail no formato válido"
    }
}