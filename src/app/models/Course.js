const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 225 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 225 },
    slug: { type: String, maxLength: 225 },
    videoId: { type: String, maxLength: 100 },
    creataAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
