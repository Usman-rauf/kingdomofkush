import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "../../../library/dbConnect";
import AdminModel from "../../../models/adminModel";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
export const authOptions = {
    session: { strategy: "jwt" },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: '/login',
        error: '/',
    },
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email;" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    await dbConnect();
                    const user = await AdminModel.findOne({ email: credentials.email, active: true });
                    if (user && bcrypt.compareSync(credentials.password, user.password)) {
                        return {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            title: user.title,
                            level: user.level,
                            mobile: user.mobile,
                            avatar: user.avatar,
                        };
                    }
                    return null;
                } catch (e) {
                    return null;
                }
            }
        })
    ],
}
export default NextAuth(authOptions)
