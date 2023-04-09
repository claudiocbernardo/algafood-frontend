export class Restaurante {
    id?: number;
    nome?: string;
    taxaFrete?: number;


    constructor(
        id?: number,
        nome?: string,
        taxaFrete?: number,
    ) {

        this.id = id;
        this.nome = nome;
        this.taxaFrete = taxaFrete;
    }
}