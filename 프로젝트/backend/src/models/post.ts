import mongoose, { Document, model, Schema } from 'mongoose'

export interface IPost extends Document{
    title: string;
    content: string;
    tags: string[];
    createdAt: Date;
    user : {
        _id : string;
        username : string;
    }
}


const PostSchema : Schema<IPost> = new Schema({
    title: {type: String , required: true},
    content: {type: String , required: true},
    tags: {type: [String] , required: false},
    createdAt: {
        type: Date,
        default : Date.now
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String
    }
})

export default model<IPost>('Post', PostSchema);
