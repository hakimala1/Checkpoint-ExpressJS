const express = require('express')
const app = express()
var date_ob = new Date();
// var mois = date_ob.getMonth() + 1;
var jour= date_ob.getDay()+1
var heurs=date_ob.getHours()
// console.log(heurs)

const middlewre=(req,res,next)=>{
    if(jour>0 && jour<7 && heurs<17 && heurs>9){next()}
   else{res.send('<h1>Horaire : du lundi au vendredi, de 9h à 17h</h1>')} 
}

app.use(middlewre)
app.use(express.static('public'))


const port = 4000
app.listen(port,()=>{console.log(`port ${port} is running `)})