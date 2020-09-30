/**Porta aonde o servidor vai startar*/
const porta = 8080

const bodyparser = require('body-parser')
const express = require('express')
const app = express()



app.use(express.static('html'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


app.use('/createAccount.html',(req,res) => {

})


app.listen(porta, () => {
    console.log(`o servidor esta sendo executado na porta ${porta}`)
})