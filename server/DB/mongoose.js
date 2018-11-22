var mongoose=require("mongoose");
module.exports={
  mongoose
}

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost:27017/TodoApp");
