const mongoose=require("mongoose");
main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookschem=new mongoose.Schema({
   title:{
    type:String,
    required:true
    
   },
   authod:{
    type:String,
   },
   price:{
    type:Number,
   }
})
const Book=mongoose.model("Book",bookschem);
let book1=new Book({
    title:"mathematicss xii",
    authour:"rd sharma",
    price:1200
});
book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})