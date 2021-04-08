const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const port=800;
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
var contactSchema=new mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    desc:String
  });

  var contact=mongoose.model('Contact',contactSchema);
 
const app=express();
app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
})
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
})
app.post('/contact',(req,res)=>{
    var data=new contact(req.body)
    data.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to database")
    })
})

app.listen(port,()=>{
})