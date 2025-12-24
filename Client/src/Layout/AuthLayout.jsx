import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
