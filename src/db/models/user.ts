import { Schema, model } from "mongoose";

interface User {
    username: String,
    fname: String,
    lname: String,
    password: String,
    phone_number: Number,
    email: String,
    profile_photo?: String,
}

const UserSchema = new Schema<User>({
    username: String,
    fname: String,
    lname: String,
    password: String,
    phone_number: Number,
    email: String,
    profile_photo: String,
});

const User = model<User>('User', UserSchema);

export default User;