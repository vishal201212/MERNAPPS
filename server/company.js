const { Router, request, response } = require('express')
const express = require('express')
const router = express.Router()
const db = require('./db')
const utils = require('./utils')



/*Add new company*/
router.post('/addemp',(request,response)=>{
  const{firstname,lastname,email,phone} = request.body

  const statement = `insert into emp(firstname,lastname,email,phone) values('${firstname}','${lastname}','${email}','${phone}')`
  db.execute(statement,(error,data)=>{
    response.send(utils.errordata(error,data))
  })
})

router.get('/getemp',(request,response)=>{
  const{firstname,lastname,email,phone} = request.body

  const statement = `select * from emp`
  db.execute(statement,(error,data)=>{
    response.send(utils.errordata(error,data))
  })
})


router.delete('/deleteemp',(request,response)=>{

  const statement = `DELETE from emp WHERE id='${request.params.id}'`
  db.execute(statement,(error,data)=>{
    response.send(utils.errordata(error,data))
  })
})

router.patch('/updateemp',(request,response)=>{
  const{id,firstname,lastname,email,phone} = request.body

  const statement = `update emp set firstname='${firstname}',lastname='${lastname}',email='${email}',phone='${phone}' where id='${id}'`
  db.execute(statement,(error,data)=>{
    response.send(utils.errordata(error,data))
  })
})






module.exports = router