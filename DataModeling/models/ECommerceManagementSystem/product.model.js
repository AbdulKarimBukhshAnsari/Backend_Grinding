import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    price : {
        type : Number,
        require : true , 
        default : 0 ,
    },
    stock : {
        type : Number , 
        require : true , 
        default : 1 
    },
    category : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "Category",
        required : true ,
    },
    image : {
        type : String
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product" , productSchema);