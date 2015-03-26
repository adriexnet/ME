var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({    
    name: { type: String, required: true },
    phone: String,
    email: String,
    address: String,
    sex: {type: String, enum: ['M', 'W']},
    updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);