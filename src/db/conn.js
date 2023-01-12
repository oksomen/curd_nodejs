const mongoose = require('mongoose');
// mongoose.set("strictQuery",true)
// mongodb://localhost:27017
mongoose.connect("mongodb://localhost:27017/user", {
    // useCresteIndex:true,
    // useNewUrlParser:true,
    // useUnidiedTopology:false
}).then(()=>{
    console.log("connection is succesful");
}).catch((e)=>{
    console.log("no connection")
})
