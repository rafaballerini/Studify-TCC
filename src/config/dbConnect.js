const mongoose = require('mongoose');const dotenv = require('dotenv');
dotenv.config();
const { DB_TOKEN } = process.env;

mongoose.connect(`mongodb+srv://rafaballerini:${DB_TOKEN}@clusterstudify.id76x0j.mongodb.net/Studify?`);

let db = mongoose.connection;

module.exports = db;