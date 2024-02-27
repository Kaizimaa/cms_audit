import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions : NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: "ag12312414",
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const {username, password} = credentials as {
                    username: string;
                    password: string;
                };
                const user: any = {
                    id: 1,
                    username: "admin",
                    password: "admin",
                    
                }
                if (username === "admin" && password === "admin") {
                    return user;
                }else{
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token , account, profile, user }: any) {
            if (account?.provider === "credentials") {
                token.username = user.username;
                token.fullname = user.fullname;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }: any) {
            if("username" in token){
                session.user.username = token.username;
            }
            if("fullname" in token){
                session.user.fullname = token.fullname;
            }
            if("role" in token){
                session.user.role = token.role;
            }
            return session;

        }
    },
    pages: {
        signOut: "/login",
        signIn: "/",
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };