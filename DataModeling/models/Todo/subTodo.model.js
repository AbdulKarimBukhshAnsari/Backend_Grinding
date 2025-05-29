import mongoose from "mongoose"


const subTodosSchema = new mongoose.Schema({
     title : {
        type : String , 
        required : true , 
        trim : true ,
    }
    ,
    content : {
        type : String , 
        required : true , 
        trim : true , 
    },
    completed : {
        type : Boolean , 
        default : false 
    }
} , {timestamps : true}) 

export const SubTodo = mongoose.model('SubTodo', subTodosSchema) ;