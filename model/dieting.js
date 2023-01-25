const mongoose = require('mongoose');
const { Schema } = mongoose;

const dietingSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    plan: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    calorieTarget: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    protein: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    carbs: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    fat: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    meals: [{
        name: String,
        calories: String,
        imageURL: String,
    }],
}, {timestamps: true})

module.exports = mongoose.model('Dieting', dietingSchema);