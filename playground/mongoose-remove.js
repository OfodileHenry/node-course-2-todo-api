const {ObjectID} = require("mongodb")
const {mongoose} = require("./../server/DB/mongoose");

const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findByIdAndRemove("5be1ae3adb7d19e019823f34").then((todo)=>{
  console.log(todo);
});
