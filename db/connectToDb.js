const mongoose = require("mongoose");

const url = "mongodb+srv://aalok:aalok@cluster0.rjuyj.mongodb.net/?retryWrites=true&w=majority"


const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}


mongoose.connect(url,connectionParams).then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.error(`Error connecting to the database. \n${err}`);
})

