import * as mongoose from 'mongoose';
import * as ReactionSchema from './reaction.model';

const BoardSchema = new mongoose.Schema({
    sprintId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sprint',
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    reaction: [ReactionSchema]
});

const LikedBoard = mongoose.model('LikedBoard', BoardSchema)
const LackedBoard = mongoose.model('LackedBoard', BoardSchema);
const LearnedBoard = mongoose.model('LearnedBoard', BoardSchema);
const LongedBoard = mongoose.model('LongedBoard', BoardSchema);

module.exports = { LackedBoard, LearnedBoard, LongedBoard };