const express = require('express')
const app = express()
const userRouter = require('./company')
const bodyparser = require('body-parser')
const cors = require('cors')
app.use(cors('*'))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(userRouter)





app.listen(4000,'0.0.0.0',()=>{
    console.log('Server started at port 4000')
})