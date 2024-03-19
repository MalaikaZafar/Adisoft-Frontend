const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    firstname: {
      type: String,
      required: [true, "First name is required"],
      minLength: [3, "First name must be at least 3 characters"],
      maxLength: [25, "First name must be at most 25 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
      minLength: [3, "Last name must be at least 3 characters"],
      maxLength: [25, "Last name must be at most 25 characters"],
    },
  },
  {
    timestamps: true,
  },
);

const User = models.User || model("User", UserSchema);
module.exports = User;
