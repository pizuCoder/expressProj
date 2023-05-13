const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactUsRoutes = require('./routes/contact-us')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin',adminRoutes)

app.use(shopRoutes)

app.use('/success',(req, res, next) =>{
    res.send('<h1>Form successfully filled</h1>');
})

app.use(contactUsRoutes)
app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
app.listen(3000);
