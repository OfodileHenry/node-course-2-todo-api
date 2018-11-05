// const MongoClient =require("mongodb").MongoClient;
const {MongoClient,ObjectID}=require("mongodb");


// var user={
//   name:"Henry",
//   age:25
// }
//
// var{name}=user;
// console.log(name)
// MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
//   if(err){
//      return console.log("Unable to connect to db server");
//   }
//   console.log("connected to MongoDB server");
//
// db.collection("Todos").find({
//   _id: new ObjectID("5bda3b3c66d7b281ff0a3ebb")}).toArray().then((docs)=>{
//   console.log("Todos");
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log("Unable to fetch Todos",err);
// });
// });

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  if(err){
     return console.log("Unable to connect to db server");
  }
  console.log("connected to MongoDB server");

  db.collection("Todos").deletemany({text:"To lunch"}).then((result)=>{
    console.log(result);
  });



// db.collection("Todos").find().count().then((count)=>{
//   console.log(`Todos count:${count}`);
// },(err)=>{
//   console.log("Unable to find todos",err);
// });
// db.collection("Users").find({name:"Henry"}).toArray().then((docs)=>{
//   console.log(JSON.stringify(docs,undefined,2));
// });


});

//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log("Unable to fetch Todos",err);
// });
