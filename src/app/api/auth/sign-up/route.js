const { connectDB } = require("@/libs/mongodb");
const User = require("@/models/User");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

async function POST(request) {
  try {
    await connectDB();

    const { name, email, password } = await request.json();

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ message: "Password must be at least 6 characters" }),
        { status: 400 },
      );
    }

    const userFound = await User.findOne({ email });

    if (userFound) {
      return new Response(JSON.stringify({ message: "Email already exists" }), {
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    return new Response(
      JSON.stringify({
        name: savedUser.name,
        email: savedUser.email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      }),
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    } else {
      console.error("Error during signup:", error);
      return new Response(null, { status: 500 });
    }
  }
}

async function PUT(request) {
  try {
    await connectDB();

    const { userId, name, email, password } = await request.json();

    if (password && password.length < 6) {
      return new Response(
        JSON.stringify({ message: "Password must be at least 6 characters" }),
        { status: 400 },
      );
    }

    const userToUpdate = await User.findById(userId);

    if (!userToUpdate) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    if (name) {
      userToUpdate.name = name;
    }

    if (email) {
      userToUpdate.email = email;
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      userToUpdate.password = hashedPassword;
    }

    await userToUpdate.save();

    console.log(userToUpdate);

    return new Response(
      JSON.stringify({
        message: "User updated successfully",
        updatedUser: {
          id: userToUpdate._id,
          name: userToUpdate.name,
          email: userToUpdate.email,
          createdAt: userToUpdate.createdAt,
          updatedAt: userToUpdate.updatedAt,
        },
      }),
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 400,
      });
    } else {
      console.error("Error during user update:", error);
      return new Response(null, { status: 500 });
    }
  }
}

async function DELETE(request) {
  try {
    await connectDB();

    const { userId } = await request.json();

    const user = await User.findById(userId);

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    await user.remove();

    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error during user/cart item deletion:", error);
    return new Response(null, { status: 500 });
  }
}

module.exports = { POST, PUT, DELETE };
