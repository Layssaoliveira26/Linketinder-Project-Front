const regexCPF: number[] = [0-9];
const cpf = document.getElementById('cpfCandidato');

function validadorCPF(cpf: any) {
    if(!cpf.match(regexCPF)) {
        alert("cpf deve incluir apenas números")
    }
    if(cpf.length != 11) {
        alert("cpf deve ter exatamente 11 dígitos")
    }
        
}

