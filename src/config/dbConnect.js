const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rafaballerini:Jj2k17IKvbchxp1s@clusterstudify.id76x0j.mongodb.net/Studify?");

let db = mongoose.connection;

module.exports = db;