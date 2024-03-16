const mongoose=require("mongoose");
let compass_url='mongodb://localhost:27017/sampledb';
let mongodb_url='mongodb+srv://kajal_pauly:kajal_2703@kajal.x7sevja.mongodb.net/data?retryWrites=true&w=majority&appName=kajal';
mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})