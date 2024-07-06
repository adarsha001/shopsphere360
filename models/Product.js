// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  Instagram_ID: String,
  Username: String,
  Full_name: String,
  Profile_link: String,
  Followed_by_viewer: String,
  Is_Verified: String,
  Followers_count: String,
  Following_count: String,
  Biography: String,
  Public_email: String,
  Posts_count: String,
  Phone_country_code: String,
  Phone_number: String,
  City: String,
  Address: String,
  Is_private: String,
  Is_business: String,
  External_url: String,
  image_link: String,
  value: Number,
  id: String // Adding id as a string
});

module.exports = mongoose.model('Product', ProductSchema);
