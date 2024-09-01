require('dotenv').config();
const mongoose = require('mongoose');
const connectToMongo =  () => {
    mongoose.connect(process.env.mongoURI)
    .then( ()=>
    {
    console.log("connected");
    const fetched_data= mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray().then(async(data)=>{
         global.food_items=data;   
         //  console.log(global.food_items); 
        const foodCategory =await  mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray().then((catData)=>{
           global.food_items=data;    
           global.foodCategory=catData;    
        })
    }
    )
    }
   )
}
module.exports=connectToMongo;
