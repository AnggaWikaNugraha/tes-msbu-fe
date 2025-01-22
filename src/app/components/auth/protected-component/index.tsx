"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface ProtectedComponentProps {
  children: React.ReactNode;
}

export default function ProtectedComponent({
  children,
}: ProtectedComponentProps) {
  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check session status or data to determine if the user is authenticated
    if (status === "authenticated" && session?.accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [status, session]);

  // If user is not authenticated, return nothing or a loading state
  if (!isAuthenticated) {
    return null; // You can also return a loading spinner or redirect if needed
  }

  return <>{children}</>;
}
