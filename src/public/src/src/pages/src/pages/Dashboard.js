import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Bem-vindo, {user.email}</h2>
      <p className="mb-6">Você está logado no painel do ReplyFlow AI.</p>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
        Sair
      </button>
    </div>
  );
}
