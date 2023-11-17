import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from '../../../../helper/constants';

const authOption:NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'HI',
      credentials: {
        username: { label: "username", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password", placeholder: "jsmith" }
      },
      async authorize(credentials, req) {

        if (!credentials || !credentials.username || !credentials.password) {
          return null
        }

        const user = users.find((item) => item.email === credentials.username);

        if (user?.password === credentials.password) {
          return user
        }

        else {
          return null
        }

        // const {username, password} = credentials
        //   const res = await fetch("https://gomonetize-backend.onrender.com/api/v1/auth/login", {
        //     method: 'POST',
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        //   })
        //   const user = await res.json()

        //   // // If no error and we have user data, return it
        //   if ( user) {
        //     return user
        //   }
        //   // // Return null if user data could not be retrieved
        //   return null
      }
    })],
  secret: process.env.NEXTAUTH_SECRET
}

const hander = NextAuth(authOption);

export { hander as GET, hander as POST }