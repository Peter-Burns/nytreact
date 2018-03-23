const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  },
  snippet:{
    type:String
  },
  dateCreated:{
    type:Date
  }
});


const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
