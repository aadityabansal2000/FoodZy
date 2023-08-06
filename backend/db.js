require('dotenv').config();
const mongoose = require('mongoose');
// const mongoURI="mongodb+srv://Aaditya_Bansal:mern123@cluster0.p1iot8a.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// const mongoURI="mongodb://Aaditya_Bansal:mern123@ac-lvzzdfc-shard-00-00.p1iot8a.mongodb.net:27017,ac-lvzzdfc-shard-00-01.p1iot8a.mongodb.net:27017,ac-lvzzdfc-shard-00-02.p1iot8a.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-wruy7u-shard-0&authSource=admin&retryWrites=true&w=majority";
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