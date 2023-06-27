export class Transaccion {
    _id!:String
    monedaOrigen!:String
    cantidadOrigen!: number
    monedaDestino!: String
    cantidadDestino!:  number
    emailCliente!: String
    tasaConversion!:  number

    constructor(){}

    calcularCantidadDestino(): void {
        if (this.cantidadOrigen && this.tasaConversion) {
            this.cantidadDestino = this.cantidadOrigen * this.tasaConversion;
        }
    }
}
