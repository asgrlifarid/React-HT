  const ProductModel =require("../model/modelProduct")

  getProd= async (req, res) => {
    try {
      const products= await ProductModel.find({});
      res.status(200).json({data: products , message:"success"})
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
  getProdById= async (req, res) => {
      const { id } = req.params;
    try {
      const product= await ProductModel.findById(id);
      if (!product) {
          return res.status(404).json({ message: "product not found!" });
      }
      res.status(200).json({data: product , message:"success"})
    } catch (error) {
      //  res.status(500).send({ message: error.message });
    }
  }
  getDeleteById = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(id);
      const products = await ProductModel.find({})
      
      res.status(200).json({ deletedProduct : deletedProduct , products: products, message: "successfully deleted" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  postProd =async (req, res)=>{
      try {
          const newProd = ProductModel({...req.body})
          await newProd.save()
          res.status(200).json({newProd : newProd , message : "successfully added"})
      } catch (error) {
          res.status(500).send({message : error.message})
      }
  }
  editProd =async (req ,res)=>{
      const { id } = req.params;
      try {
          const editedProd = await ProductModel.findByIdAndUpdate(id,{...req.body});
          const products = await ProductModel.find({});
          res.status(200).json({editedProd : editedProd , message : "edited succesfully" , data : products})
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
  }
  
  searchByTitle = async (req, res) => {
    const { title } = req.query;
    console.log(title);
    
    

    try {
      
      const product = await ProductModel.find({
        title: { $regex: title, $options: "i" },
      });
      res.status(200).json({ data: product, message: "success!" });
    } catch (error) {
      res.status(500).send(error.message);
      
      
    }
  };




  module.exports={getProd , getProdById , getDeleteById ,postProd ,editProd , searchByTitle}