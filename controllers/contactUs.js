const path = require('path')

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact-us.html'));
  }

exports.postContact = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    console.log(username, email);
    res.redirect('/success');
}