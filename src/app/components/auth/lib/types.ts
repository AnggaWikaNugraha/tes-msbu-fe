// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  // Extending the Session interface to include user and tokens
  interface Session extends DefaultSession {
    accessToken?: string;
    refreshToken?: string;
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      // Add other properties you want to store in the session
    };
  }

  // Extending the User interface to include tokens and additional properties
  interface User extends DefaultUser {
    accessToken?: string;
    refreshToken?: string;
    id?: string;
    // Add other properties you want to store in the user object
  }

  // Extending JWT interface to include tokens and user data
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      // Add other properties you want to store in JWT
    };
  }
}
