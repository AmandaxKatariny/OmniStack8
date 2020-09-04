 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;

 const DevSchema = new Schema({
     name: {
         type: String,
         required: true
     },
     user: {
         type: String,
         required: true
     },
     bio: String,
     avatar: {
         type: String,
         required: true
     },
     likes: [{
         type: Schema.Types.ObjectId,
         ref: "Dev"
     }],
     dislikes: [{
         type: Schema.Types.ObjectId,
         ref: "Dev"
     }]
 }, {
     timestamps: true
 });

 const dev = mongoose.model("Dev", DevSchema);

 module.exports = dev;