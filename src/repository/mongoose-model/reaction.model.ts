import * as mongoose from 'mongoose';

const ReactionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    like: Boolean,
    dislike: Boolean,
    informative: Boolean,
    confused: Boolean,
    applause: Boolean
});

module.exports = { ReactionSchema };