var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var testSchema = mongoose.Schema({
    messages: 
    {
        type: String,
        required: true
    }
})


var Test = mongoose.model('Test',testSchema)
module.exports = Test



