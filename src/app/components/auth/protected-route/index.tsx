"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface WithAuthProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: WithAuthProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If session status is still loading, keep showing the loading state
    if (status === "loading") {
      return;
    }

    // If no session or not authenticated, redirect to login page
    if (status === "unauthenticated") {
      router.push("/auth/login");
    } else {
      // If authenticated, allow access to the protected content
      setIsLoading(false);
    }
  }, [status, router]);

  // Render the protected component if the user is authenticated
  return <>{children}</>;
}
