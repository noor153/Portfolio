const express = require('express')
const connection = require('./common/db')
const router = require('./modules/routes/main.routes')
const path = require('path');
const cors = require('cors')
const app = express()

app.use(express.json())

connection()


app.use(express.static('../dist/portfolio'));



app.use(cors());

app.use(router)

app.listen(3000,()=>{
console.log("hello to back");
})