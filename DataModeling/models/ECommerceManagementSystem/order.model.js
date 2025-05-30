import mongoose, { mongo } from "mongoose"


const orderDetailSchema = new mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Product",
        required : true 
    },
    count : {
        type : Number , 
        required : true 
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice : {
        type : Number , 
        required : true , 
        default : 0 , 
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "User",
        required : true ,
    },
    address : {
        type : String , 
        required : true 
    },
    contactNumber : {
        type : Number
    },
    orderDetail : [orderDetailSchema] 

} , {timestamps : true})

export const Order = mongoose.model("Order", orderSchema);