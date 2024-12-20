import { Schema, model } from "mongoose";

let userSchema = new Schema({
  name: String,
  Password: String,
  email: String,
});

let user = model("user", userSchema);

export { user };
