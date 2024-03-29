const { connectDB } = require("@/libs/mongodb");
const User = require("@/models/User");
const { CredentialsProvider } = require("next-auth/providers/credentials");
const { GoogleProvider } = require("next-auth/providers/google");
const bcrypt = require("bcryptjs");

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const userFound = await User.findOne({
          email: credentials.email,
        }).select("+password");

        if (!userFound) throw new Error("Invalid Email");

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          userFound.password,
        );

        if (!passwordMatch) throw new Error("Invalid Password");
        return userFound;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session.name) {
        token.name = session.name;
      }

      if (trigger === "update" && session.email) {
        token.email = session.email;
      }

      if (user) {
        const u = user;
        return {
          ...token,
          id: u.id,
          phone: u.phone,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          _id: token.id,
          name: token.name,
          phone: token.phone,
        },
      };
    },
  },
};

module.exports = authOptions;
