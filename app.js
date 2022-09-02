const express = require('express')
const connection = require('./Backend/common/db')
const router = require('./Backend/modules/routes/main.routes')
const path = require('path');
const cors = require('cors')
const app = express()
app.use(express.json())
connection()
app.use(express.static('./dist/portfolio'));
app.use(cors());
app.use(router)
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})