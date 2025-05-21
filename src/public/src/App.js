import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">ReplyFlow AI</h1>
      <p className="text-lg mb-6">Respostas inteligentes com IA no seu estilo.</p>
      <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded">
        Comece agora
      </Link>
    </div>
  );
}
