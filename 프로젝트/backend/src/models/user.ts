import { Document, model, Schema } from 'mongoose'

export interface IUser extends Document{
    username : string;
    email : string;
    hashedPassword: string;
    token: string;
    createdAt: Date;
}

const UserSchema : Schema<IUser> = new Schema({
    username: {type: String , required: true},
    email: {type: String , required: true},
    hashedPassword: {type: String , required: true},
    createdAt: {
        type: Date,
        default : Date.now
    }
})

export default model<IUser>('User', UserSchema);
