const { Schema, model } = require('mongoose');

const postDBSchema = new Schema({
    comments: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: () => new Date(),
    },
    
  },   
  {
    toJSON: {
      virtuals: true,
    },
  });


const PostDB = model('PostDB', postDBSchema);

module.exports = PostDB;
