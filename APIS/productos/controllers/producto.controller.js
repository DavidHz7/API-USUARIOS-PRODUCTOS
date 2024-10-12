const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const viewproducto = async (req = request, res = response) => {
    res.json({
        'msg':'puto d'
    })
};

const addProduct = async (req = request, res = response) => {

    const {name, precio, cantidad, fecha_exp} = req.body;


    const result = await prisma.productos.create({
        data:{
            name, 
            precio, 
            cantidad, 
            fecha_exp
        }
    }).catch((e)=>{
        return e.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json(result);
};


const Showproductos = async(req=request, res=response)=>{

    const productos = await prisma.productos.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        productos
    });
};

const Editproductos = async(req=request, res=response)=>{
    const { id } = req.params;

    const {name, precio, cantidad, fecha_exp} = req.body;

    const result = await prisma.productos.update({
        where:{
            id: Number(id)
        },
        data: {
            name, 
            precio, 
            cantidad, 
            fecha_exp
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });

};

const Deleteproductos = async(req=request, res=response)=>{
    const { id } = req.params;

    const result = await prisma.productos.delete({
        where:{
            id: Number(id)
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });
};


module.exports={
    viewproducto,
    Deleteproductos,
    Editproductos,
    Showproductos,
    addProduct
    
}