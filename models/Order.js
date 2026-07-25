import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

customerName:{
  type:String,
  required:true
},

phone:{
  type:String,
  required:true
},

address:{
  type:String
},

items:[
  {
    name:String,
    price:Number,
    quantity:Number
  }
],

total:{
  type:Number
},

status:{
  type:String,
  default:"Pending"
},

createdAt:{
  type:Date,
  default:Date.now
}

});


export default mongoose.models.Order ||
mongoose.model("Order", OrderSchema);
