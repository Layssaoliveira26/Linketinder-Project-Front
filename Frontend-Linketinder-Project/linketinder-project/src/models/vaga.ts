export class Vaga {
    titulo: string;
    nivel: string;
    requisitos: string[];
    beneficios: string[];
    empresa: string;

    constructor(titulo: string, nivel: string, requisitos: string[], beneficios: string[], empresa: string) {
        this.titulo = titulo;
        this.nivel = nivel;
        this.requisitos = requisitos;
        this.beneficios = beneficios;
        this.empresa = empresa;
    }
}