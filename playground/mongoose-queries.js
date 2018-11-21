const {ObjectID} = require("mongodb")
const {mongoose} = require("./../server/DB/mongoose");

const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

var id = "5bf531478d481c483595b514";
if (!ObjectID.isValid(id)){
  console.log("ID is not valid");
}

Todo.find({
  _id:id
}).then((todos)=>{
  console.log("Todos", todos);
});
Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log("Todo", todo);
});
Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log("ID certainly not in directory")
  }
    console.log("Todo By Id", todo);
  }).catch((e)=>{
    console.log(e);
  })

User.findById("5be1ae3adb7d19e019823f34").then((user)=>{
   if (!user){
   return console.log("Unable to find user");
}
  console.log(JSON.stringify(user,undefined,2));
},(e)=>{
  console.log(e);
});
