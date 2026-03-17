class Empresa {
    nome: string;
    emailCorporativo: string;
    cnpj: string;
    pais: string;
    estado: string;
    cep: string;
    descricaoEmpresa: string;

    constructor(nome: string, emailCorporativo: string, cnpj: string, pais: string, estado: string, cep: string, descricaoEmpresa: string) {
      this.nome = nome;
      this.emailCorporativo = emailCorporativo;
      this.cnpj = cnpj;
      this.pais = pais;
      this.estado = estado;
      this.cep = cep;
      this.descricaoEmpresa = descricaoEmpresa;
    }
}