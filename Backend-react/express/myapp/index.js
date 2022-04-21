const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Mama deksen kajkarbar')
})
const person = [
    {id:1,name:"Shuvo",age:24,fathers_name:"Babul Sheikh"},
    {id:2,name:"shawon",age:24,fathers_name:"Babul Sheikh"},
    {id:3,name:"Maliha",age:24,fathers_name:"Babul Sheikh"},
    {id:4,name:"Kalia",age:24,fathers_name:"Babul Sheikh"},
]
app.get('/user',(req,res)=>{
    console.log('request:',req.body)
    res.send('success')
})
app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    const id = req.params.id
    const user = person.find((obj)=>obj.id = id)
    res.send(user)
})
app.listen(port,()=>{
    console.log('listening to port',port);
})

