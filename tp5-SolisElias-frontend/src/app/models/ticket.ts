import { Espectador } from "./espectador"

export class Ticket {
    _id!:String;
    categoriaEspectador!: String // categoría del espectador puede ser: e = Extranjero, l = local.
    fechaCompra!: String
    espectador!: Espectador

    constructor(){}
    
}
