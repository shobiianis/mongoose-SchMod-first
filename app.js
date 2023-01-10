const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-com")

const productSchema=new mongoose.Schema({
   name:String,
   ram:String,
   price:Number,

})

const saveInDb= async()=>{


    const productModel=mongoose.model("product",productSchema);
    let data=new productModel({name :"abc",ram:"16gb",price:40000});

    let result=await data.save();
    console.log(result)
}



const updateInDb=async()=>{
    const productModel=mongoose.model("product",productSchema);//same as for saveInDb   
    let data= await productModel.updateOne(
           {name:"huwaie"}, // it will update where name is huwaie 
           {$set : {price:9000}}// and update price

    )
    console.log(data)
}

const deleteInDb=async()=>{

    const productModel=mongoose.model("product",productSchema);//same as for saveInDb   
    let data= await productModel.deleteOne({name:"iphone"})// it will delete whole entry for where name is iphone
     console.log(data);
    
}

const findInDb= async ()=>{

    const productModel=mongoose.model("product",productSchema);//same as for saveInDb   
    let data= await productModel.find(); //it will read the whole database collections
    console.log(data)
}
const findSpecific=async()=>{

    const productModel=mongoose.model("product",productSchema);//same as for saveInDb   
    let data= await productModel.find({name: "iphone"}); //it will read only for that record where name is iphone
    console.log(data)
}

//now call any function to execute


