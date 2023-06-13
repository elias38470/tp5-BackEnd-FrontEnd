const Producto = require('../models/Producto'); 

const productoCtrl = {} 

productoCtrl.getProductos = async (req, res) => { 
    var productos = await Producto.find(); 
    res.json(productos); 
} 


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
  
  


productoCtrl.createProducto = async (req, res) =>{
    console.log(req.body)
    var producto = new Producto(req.body);
    try { 
        await producto.save(); 
        res.json({ 'status': '1', 'msg': 'Agente guardado.'}) 
    } catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando operacion.'}) 
    } 
}

productoCtrl.editProducto  = async (req, res) =>{
    const producto = new Producto(req.body);
    try{    
        await Producto.updateOne({_id: req.body._id}, producto);
        res.json({
            'status': '1', 
            'msg': 'Agente updated'
        })
    }catch(error){
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando la operacion' 
        }) 
    }
}

productoCtrl.deleteProducto = async (req, res) =>{
    try{
        await Producto.deleteOne({_id: req.params.id});
        res.json({ 
            status: '1', 
            msg: 'Agente removed'
        }) 
    }catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando la operacion' 
        }) 
    } 
}

module.exports = productoCtrl;