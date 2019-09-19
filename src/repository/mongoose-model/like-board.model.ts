import * as mongoose from 'mongoose';
import * as ReactionSchema from './reaction.model';

const LikedBoardSchema = new mongoose.Schema({
    sprintId: {
        type: String
    },
    userId: {
        type: String
    },
    text: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    reaction: [ReactionSchema]
});

const LikedBoard = mongoose.model('LikedBoard', LikedBoardSchema);

module.exports = { LikedBoard };