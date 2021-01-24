import { Document, model, Schema } from 'mongoose'

export interface IProfile extends Document{
    username : string;
    email : string;
    imageurl : string;
    postlike : string[];
    follower : string[];
    following : string[];
}

const ProfileSchema : Schema<IProfile> = new Schema({
    username: {type: String , required: true},
    email: {type: String , required: true},
    imageurl: { type: String },
    postlike: { type: [String], required: true },
    follower: { type: [String] , required: true },
    following: { type: [String] , required: true },
})

export default model<IProfile>('Profile', ProfileSchema);
