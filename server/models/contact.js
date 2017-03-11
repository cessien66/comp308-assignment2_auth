let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String
},
{
  collection: "contact_lists"
});

module.exports = mongoose.model('contact_lists',contactSchema);
