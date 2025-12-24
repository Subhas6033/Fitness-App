import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Components/index";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      {/* 404 Number */}
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6">404</h1>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Welcome to the stone age
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        You have reached the far end of the internet!
      </p>

      {/* Go Home Button */}
      <Button onClick={() => navigate("/")}>Go to Home</Button>

      {/* Optional Refresh */}
      <p className="text-gray-500 mt-4">Or refresh the page once</p>
    </main>
  );
};

export default NotFound;
