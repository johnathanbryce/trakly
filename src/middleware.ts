import { clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    '/home(.*)',
    '/profile(.*)',
]);

export default clerkMiddleware((auth, req) => {
    // protects /home and /profile routes
    if (isProtectedRoute(req)) auth().protect();

    // Redirect logged-in users from the root route to /dashboard
    if (req.nextUrl.pathname === '/' && auth().userId) {
        return NextResponse.redirect(new URL('/home', req.url));
    }
  
});
  
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};