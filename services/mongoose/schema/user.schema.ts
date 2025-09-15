import {Schema} from "mongoose";

export interface IUser{
  _id: string;
  lastName: string;
  firstName: string;
  login: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export const userSchema = new Schema<IUser>({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: true,
    collection: 'user',
    versionKey: false
});