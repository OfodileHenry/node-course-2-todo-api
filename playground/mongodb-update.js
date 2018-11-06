const {MongoClient,ObjectID}=require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
  if(err){
     return console.log("Unable to connect to db server");
  }
  console.log("connected to MongoDB server");

  // db.collection("Users").deleteMany({name:"Henry"}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection("Todos").deleteOne({text:"Eat lunch"}).then((result)=>{
  //   console.log(result);
  // });
//
//   db.collection("Todos").findOneAndUpdate({
//     _id: new ObjectID("5be00d330840ef311a65479c")
//   },{
//     $set:{
//       completed:false
//     }
//   },{
//     returnOriginal:false
//   })
//   .then((result)=>{
//     console.log(result);
// })
db.collection("Users").findOneAndUpdate({
  _id: new ObjectID("5bd63c9ea137ba149089fce4")
},{
  $set:{
    name:"Sule"
  },
  $inc:{
    age:1
  }
},{
  returnOriginal:false
})
.then((result)=>{
  console.log(result);
})

});
