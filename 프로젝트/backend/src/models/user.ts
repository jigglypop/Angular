import { Document, model, Schema } from 'mongoose'

export interface IUser extends Document{
    username: string;
    hashedPassword: string;
}

const UserSchema : Schema<IUser> = new Schema({
    username: {type: String , required: true},
    hashedPassword: {type: String , required: true},
})

export default model<IUser>('User', UserSchema);
