"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavLinks() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me", {
        credentials: "include",
      });
      setIsLoggedIn(response.ok);
    } catch {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check auth status on mount and whenever route changes
    checkAuth();
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setIsLoggedIn(false);
    router.push("/");
  };

  if (isLoading) {
    return <div className="nav-links" />;
  }

  return (
    <div className="nav-links">
      {isLoggedIn ? (
        <>
          <Link href="/tasks">Tasks</Link>
          <button
            className="button secondary nav-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      )}
    </div>
  );
}
