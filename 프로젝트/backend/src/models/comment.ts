import mongoose,{ Document, model, Schema } from 'mongoose'

export interface IComment extends Document{
    user : {
        _id : string;
        username : string;
    }
    content : string;
    createdAt: Date;
}

const CommentSchema : Schema<IComment> = new Schema({
    user: {
        _id: mongoose.Types.ObjectId,
        username: String,
    },
    content: { type: String , required: true },
    createdAt: {
        type: Date,
        default : Date.now
    }
})

export default model<IComment>('Comment', CommentSchema);
