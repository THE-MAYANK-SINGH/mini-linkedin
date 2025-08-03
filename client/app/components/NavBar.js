"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <nav className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <a href="/" className="text-xl font-bold text-blue-600">
        MiniLinkedIn
      </a>
      <div className="space-x-4 text-sm">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <>
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
