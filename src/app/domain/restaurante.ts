import { Cozinha } from "./cozinha";

export class Restaurante {
    id?: number;
    nome?: string;
    taxaFrete?: number;
    cozinha?: Cozinha;


    constructor(
        id?: number,
        nome?: string,
        taxaFrete?: number,
        cozinha?: Cozinha,
    ) {

        this.id = id;
        this.nome = nome;
        this.taxaFrete = taxaFrete;
        this.cozinha = cozinha;
    }
}
