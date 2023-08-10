import mongoose, { Schema, model, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

interface User extends Document {
  username: string;
  fname: string;
  lname: string;
  password: string;
  phone_number: number;
  email: string;
  profile_photo?: string;
}

const userSchema: Schema<User> = new Schema({
  username: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: false },
  password: { type: String, required: true },
  phone_number: { type: Number, required: false },
  email: { type: String, required: true, unique: true },
  profile_photo: { type: String, required: false },
});

userSchema.pre<User>("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      return next(error as mongoose.Error);
    }
  } else {
    next();
  }
});

const User: Model<User> = mongoose.model<User>("User", userSchema);

export default User;
