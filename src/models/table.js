const mongoose = require('mongoose');

const tableModel = new mongoose.Schema({
    space: { type: Number, required: true },
    status: { type: String, enum: ['available', 'unavailable'] },
});

module.exports = mongoose.model('Table', tableModel);
