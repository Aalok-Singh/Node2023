const express = require('express')
const apiRoutes = require("./Routes/api");
const cors = require('cors');
const app = express()
var bodyParser = require('body-parser');
// const multer  = require('multer')
// const upload = multer({ dest: 'uploadsimageprofile'})
const fileUpload = require('express-fileupload');
app.use(fileUpload());
// 👇️ handle uncaught exceptions
process.on('uncaughtException', function (err) {
    console.log(err);
  });
// Db Connection
const mongoose = require('./db/connectToDb');
// End connection
// allow any api 
app.use(cors())
const dotenv = require('dotenv');
dotenv.config();
// env end
// app.use(express.json());
// app.use(express.urlencoded());

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.json('Hello World!')
})


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }))
//api routes
app.use("/api",apiRoutes);
// api end
app.post('/profileupload',(req, res) => {

console.log(req)
  
})
app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
  })

  throw new Error('An error occurred');