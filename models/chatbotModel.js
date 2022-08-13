const mongoose=require('mongoose');
const chatSchema=new mongoose.Schema(
    {
        query:String,
        solution:String
    }
)

const chat=mongoose.model('chat',chatSchema);
module.exports=chat;