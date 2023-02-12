const Product = require("../models/ProductModel");

//Create Product

expoort.createProduct = async (req, res, next) =>{
    const product = await Product.create(req.body);
    //if(product){
        res.status(201).json({
            success : true,
            product
        });
    //}
}