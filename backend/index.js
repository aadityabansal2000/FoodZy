const express = require('express')
const app = express()
const {config} = require('dotenv')
const path=require('path');
const port = 5000
const mongoDB= require("./db.js");


// const __dirname=path.resolve();
app.use(express.static(path.join(__dirname,'./../frontend/build')))
app.get('*',(req,res)=>
res.sendFile(path.join(__dirname,'./../frontend/build/index.html')))




app.use((req,res,next)=>{
 res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
 res.header(
  "Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept"
 );
 next();
})
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello Aaditya!')
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})