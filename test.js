const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create Schema
const photoSchema = new Schema({
  tittle: String,
  description: String,
});

const Photo = mongoose.model('Photo', photoSchema);

//create a photo
Photo.create({
  tittle: 'Photo 2',
  description: 'Photo description 2 lorem ipsum',
});

/* //read a photo
Photo.find({}, (err, data) => {
  console.log(data);
});

//update photo
const id = '657ddd49ddd7a57da8b686a7';
Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 111 updated',
    description: 'Photo description 111 updated',
  },
  {
    new: true,
  },
  (err, data) => {
    console.log(data);
  }
);

//delete a photo
const id = '657ddd49ddd7a57da8b686a7';

Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed..');
});
 */