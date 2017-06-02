var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Everything in Mongoose starts with a Schema. Each schema
//  maps to a MongoDB collection and defines the shape of the documents within that collection.
const PostSchema = new Schema({
    category : {type: String},
    title : {type: String, required:true},
    content:{type: String}},
    // If set timestamps, mongoose assigns createdAt and 
    // updatedAt fields to your schema, the type assigned is Date.
    {timestamps:true}
);
module.exports = mongoose.model('Post', PostSchema);