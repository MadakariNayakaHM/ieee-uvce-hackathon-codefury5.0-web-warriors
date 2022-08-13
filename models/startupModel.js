const mongoose = require('mongoose');
const startupSchema= new mongoose.Schema({
    user:
    {
        type:mongoose.Schema.ObjectId,
        ref:'User',
         required:[true,'startup must belog to a user']   
    },
startupName:{
    type:String,
    required:[true,"a startup should have a name"]
},

problemStatement:{
    type:String,
    required:[true,"a startup should have a problem statement"]

},

problemSolution:{
    type:String,
    required:[true,"a startup should have a problem statement"]
},

bsnsModelLink:{
    type:String,
    required:[true,"a startup should have a business model"]
},
fundindRequired:{
    type:Number,
    required:[true,"a startup should have a funding approximation"]
},
employment:{
    type:Number,
    required:[true," a startup should create employment for few people "]
},
status:{type:Number,
default:0}

})
startupSchema.pre(/^find/, function(next){this.populate({path:'user',select: '-__v -password'});
next()})

const startup=mongoose.model("startup",startupSchema);
module.exports=startup;
