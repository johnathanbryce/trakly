
import {useState, useEffect} from 'react'
// Auth
import { useAuth, useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

import { SignOutButton } from '@clerk/nextjs';
import { Sign } from 'crypto';

export default async function Dashboard() {

  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();
  console.log('dashboard', userId)

  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()

  // Use `user` to render user details or create UI elements

  return (
    <section>
        <h2> Dashboard </h2>

        <SignOutButton redirectUrl='/'/>
        


    </section>
  )
}
