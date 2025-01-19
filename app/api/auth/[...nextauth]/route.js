import NextAuth from "next-auth/"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";

const handler =
    NextAuth({
        session: {
            strategy: "jwt",
            maxAge: 30 * 24 * 60 * 60

        },
        providers: [
            CredentialsProvider({
                credentials: {
                    email: {},
                    password: {}
                },
                async authorize(credentials) {
                    const { email, password } = credentials;
                    if (!email || !password) {
                        return null;
                    }
                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({ email });
                    if (!currentUser) {
                        return null;
                    }
                    const isPasswordCorrect = await bcrypt.compareSync(password, currentUser.password);
                    if (!isPasswordCorrect) {
                        return null;
                    }
                    return {
                        currentUser
                    };



                }

            })
        ],
        callbacks: {},
        pages: {
            signIn: "/login",
            signOut: "/logout",

        }

    });



export { handler as GET, handler as POST };