import mongoose, { Document, model, Schema } from 'mongoose'
import { IProfile } from './profile';

export interface IUser extends Document{
    username : string;
    email : string;
    hashedPassword: string;
    token: string;
    createdAt: Date;
    profile: IProfile
}

const UserSchema : Schema<IUser> = new Schema({
    username: {type: String , required: true},
    email: {type: String , required: true},
    hashedPassword: {type: String , required: true},
    createdAt: {
        type: Date,
        default : Date.now
    },
    profile :{
        _id: mongoose.Types.ObjectId,
        username: {type: String , required: true},
        email: {type: String , required: true},
    }
})

export default model<IUser>('User', UserSchema);
