import NextAuth from "next-auth"

const handler = NextAuth({

    // get a code from google and sent that to the django backend to get the access token and refresh token with django client id and secret
    async signIn({ code, redirect }) {
        const response = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code, redirect })
        })
        const data = await response.json()
        if (response.ok && data) {
            return data
        }
        return null
    },
    // get the user from the django backend with the access token
    async jwt({ token, user }) {
        if (user) {
            token.accessToken = user.accessToken
        }
        return token
    },
    // get the user from the django backend with the access token
    async session({ session, token }) {
        session.accessToken = token.accessToken
        return session
    }

})

export { handler as GET, handler as POST }