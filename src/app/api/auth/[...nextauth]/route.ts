import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from '../../../../helper/constants';

export const authOption = {
  providers: [
    CredentialsProvider({
      name: 'HI',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "jsmith" }
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
      }
    })],
  secret: process.env.NEXTAUTH_URL
}

const hander = NextAuth(authOption);

export { hander as GET, hander as POST }