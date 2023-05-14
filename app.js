const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactUsRoutes = require('./routes/contact-us')

const errorController  = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin',adminRoutes)

app.use(shopRoutes)

app.use('/success',(req, res, next) =>{
    res.send('<h1>Form successfully filled</h1>');
})

app.use(contactUsRoutes)
app.use(errorController.get404)
app.listen(3000);
