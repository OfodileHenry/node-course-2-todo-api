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

  db.collection("Users").findOneAndDelete({_id: new ObjectID("5be00ca80840ef311a65475c")}).then((result)=>{
    console.log(JSON.stringify(result,undefined,3));
  });


});
