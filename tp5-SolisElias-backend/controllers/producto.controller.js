const Producto = require('../models/Producto'); 

const productoCtrl = {} 


/**
 * Obtiene una lista de productos basada en los filtros proporcionados.
 * Si se especifica el parámetro "destacado", se devuelven solo los productos destacados.
 * Si no se especifica el parámetro "destacado" o es vacío, se devuelven todos los productos.
 * 
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
productoCtrl.getProductos = async (req, res) => { 
    try {
        let criterio = {};
    
        if ((req.query.destacado != null && req.query.destacado != "")) {  // tambien podria cambiar la condicion por if (req.query.destacado !== undefined)
          criterio.destacado = req.query.destacado;
        }
    
        const productos = await Producto.find(criterio);
        res.json(productos);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los productos' });
      }
} 

/**
 * Obtiene una lista de productos destacados.
 * 
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
productoCtrl.getProductosDestacados = async (req, res) => {
    try {
      if (req.params.destacado === 'destacados') {
        const productosDestacados = await Producto.find({ destacado: true });
        res.json(productosDestacados);
      } else {
        res.status(400).json({ message: 'Valor de parámetro no válido' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener productos destacados' });
    }
};
  
  

/**
 * Crea un nuevo producto.
 * 
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
productoCtrl.createProducto = async (req, res) =>{
    console.log(req.body)
    var producto = new Producto(req.body);
    try { 
        await producto.save(); 
        res.json({ 'status': '1', 'msg': 'Producto guardado'}) 
    } catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando operacion.'}) 
    } 
}


/**
 * Actualiza un producto existente.
 * 
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
productoCtrl.editProducto  = async (req, res) =>{
    const producto = new Producto(req.body);
    try{    
        await Producto.updateOne({_id: req.body._id}, producto);
        res.json({
            'status': '1', 
            'msg': 'Producto Actualizado'
        })
    }catch(error){
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando la operacion' 
        }) 
    }
}

/**
 * Elimina un producto existente.
 * 
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
productoCtrl.deleteProducto = async (req, res) =>{
    try{
        await Producto.deleteOne({_id: req.params.id});
        res.json({ 
            status: '1', 
            msg: 'Producto eliminado'
        }) 
    }catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando la operacion' 
        }) 
    } 
}

productoCtrl.getProducto = async (req, res)=>{
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

module.exports = productoCtrl;