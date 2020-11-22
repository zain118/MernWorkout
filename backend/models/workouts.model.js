const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    duration: {
        type: Number,
        required: true,
        unique: false,
    },
    description: {
        type: String,
        required: true,
        unique: false,
    }, date: {
        type: Date,
        required: true,
        unique: false,
    }
}, {
    timestamps: true,
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;