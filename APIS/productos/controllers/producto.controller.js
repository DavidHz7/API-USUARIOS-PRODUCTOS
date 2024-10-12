const {response, request} = require('express');

    const viewproducto = async (req = request, res = response) => {
    res.json({
        'msg':'puto d'
    })
};



const productoGet = (req = request, res = response) => {


    //ejemplo de respuesta tipo json
    res.status(200).json(
        productos
    );
}

module.exports={
    viewproducto,
    productoGet,
    
}