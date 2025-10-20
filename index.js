const mongoose=require('mongoose');
main().then((res)=>{
    console.log("connection successful");
})
.catch(err=> console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const User=mongoose.model("User",userSchema);
// const user2=new User({
//     name:"Eve",
//     email:"Eve@gmail.com",
//     age:45,
// });
// user2.save().then(res=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:30},
//     {name:"Peter",email:"peter@gmail.com",age:30},
//     {name:"bruce",email:"bruce@gmail.com",age:30}
// ]).then(res=>{console.log(res)});
// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// User.updateOne({name:"bruce"},{age:49}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// User.deleteOne({age:48}).then((res)=>{
//     console.log(res);
// })
User.findByIdAndDelete("67d80750b853148a677692ab").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
User.findById(id);