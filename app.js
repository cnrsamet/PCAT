const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const ejs = require('ejs');

const photoControllers= require('./controllers/photoControllers');
const pageController = require('./controllers/pageController');

const app = express();

//Connect Database
mongoose.connect('mongodb+srv://samettcaner:rhtnCKAqSZ9leMPu@cluster0.tuxac5i.mongodb.net/pcat-db?retryWrites=true&w=majority', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  //useFindAndModify: false
}).then(() => {
  console.log('DB CONNECTED!');
}).catch((err) => { 
  console.log(err);
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //req.body > html catch
app.use(express.json()); //read with json > res.redirect('/');
app.use(fileUpload()); // Saved as fileupload middlewares.
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
); // POST ->>> PUT, GET ->>> DELETE

//ROUTES
app.get('/', photoControllers.getAllPhotos);
//Single Photo Page
app.get('/photos/:id', photoControllers.getPhoto);
//Create Photo
app.post('/photos', photoControllers.createPhoto);
//Edit/Update Photo Page
app.put('/photos/:id', photoControllers.updatePhoto);
//Delete Photo
app.delete('/photos/:id', photoControllers.deletePhoto);
//PAGE CONTROLLER
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
//Edit Rout
app.get('/photos/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} Portunda Başlatildi.`);
});
