const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const areaEmail = document.getElementsByClassName('areaEmail')[0] as HTMLElement;

export function validadorEmail(email: any): boolean {
    if(!email.match(regexEmail)) {
        areaEmail.innerHTML = "Informe um e-mail no formato válido"
        return false;
    }
    return true;
}