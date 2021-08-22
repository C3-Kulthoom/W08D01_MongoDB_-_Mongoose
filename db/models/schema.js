const mongoose = require("mongoose");

//////// p c  Q3 
const todoschema = new mongoose.Schema({
    task:{type:String },
    description:{type:String , required:true  , lowercase:true },
    deadline:{type:Date},
    isCompleted:{type:Boolean }, 
    priority :{type:String }


}
)

///////  p c Q4 
const todoModel = mongoose.model("Todo" ,todoschema )

module.exports = todoModel