
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Home',(req,res)=>{
    res.send("First Server Code")
})

app.get('/login',(req,res)=>{
    res.send('<h1>this is login</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h2>writing first express code</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})