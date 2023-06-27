export class Producto {
    _id!:String
    nombre!: String
    descripcion!: String
    imagen!: String //url de una imagen para mostrar
    precio!: Number
    stock!: Number
    destacado!: Boolean // solo algunos productos son destacados
}
