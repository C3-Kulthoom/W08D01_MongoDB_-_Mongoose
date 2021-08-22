const Todo = require("../../db/models/schema");
const todoModel = require("../../db/models/schema");

const getAllTodos = (req, res) => {
  todoModel.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.json(err);
    });

}





    const createTodo = (req, res) => {
        const { task,description ,isCompleted, deadline, priority } = req.body;
      
        const Todo = new todoModel({
          task,
          description,
          isCompleted,
          deadline,
          priority,
        });
      
        Todo
          .save()
          .then((result) => {
            res.status(201).json(result);
          })
          .catch((err) => {
            res.json(err);
          });
      };

const completedtaskes = (req,res)=>{
  todoModel.find ({isCompleted : true 
  })
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((err) => {
    res.json(err);
  });

}


const updateTodo = (req,res) => {


}




const deleteTodo = (req,res) => {
  // console.log("hi")
// const state = req.params.state
// console.log(state)
// console.log(state)
todoModel.findOneAndDelete ({isCompleted:false}  ,  (err, docs)=> {
  if (err){
      console.log(err)
  }
  else{
      console.log("Deleted User : ", docs);
  }
})
}

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo ,completedtaskes };

