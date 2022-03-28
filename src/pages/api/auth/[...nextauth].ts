import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import AzureAD from "next-auth/providers/azure-ad";
import Google from "next-auth/providers/google";

export default NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,

    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Local User Login',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const authURL_KF: string = "http://localhost:8181/cxf/enhsKfOAS/sec/kfJwtIssuer/authenticateLocalUser";
                //const authURL_QKS:string = "http://localhost:1080/sec/cmn/jwtIssuer/signIn";

                const res = await fetch(authURL_KF, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json();

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user;
                }
                // Return null if user data could not be retrieved
                return null;
            }
        }),
        /*AzureAD({
            clientId: process.env.AZURE_ID,
            clientSecret: process.env.AZURE_CLIENT_SECRET,
            tenantId: process.env.AZURE_TENANT_ID,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })*/
    ],

    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    }
})