const dotenv=require('dotenv');
dotenv.config({path:'./config.env'})
const mongoose=require('mongoose');
const DB=process.env.DATA_BASE;
mongoose.connect(DB).then(console.log(`---successfuly connected to database---`)).catch();

const app = require('./app');
const port=8080;
console.log(`----------${process.env.NODE_ENV} Mode----------`)
app.listen(port,()=>{console.log(`app is running at the port ${port}`)});