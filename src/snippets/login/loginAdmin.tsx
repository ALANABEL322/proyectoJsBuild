import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const publicPaths = ["/", "/web/login"];

  const handleAdminChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2337/server/login",
        {
          username,
          password,
        },
        {
          headers: {
            "X-Parse-REST-API-Key": "Yzhl06W5O7Vhf8iwlYBQCxs6hY8Fs2PQewNGjsl0",
            "Content-Type": "application/json",
            "X-Parse-Application-Id": "028",
          },
        }
      );
      console.log("Respuesta:", response.data);

      // Guardar response.data en local storage
      localStorage.setItem("authData", JSON.stringify(response.data));
      Swal.fire({
        icon: "success",
        title: "Autenticación exitosa",
        text: "Serás redirigido en breve.",
      }).then(() => {
        setIsAuthenticated(true);
        console.log("redireccion");

        window.location.replace("/");
      });
    } catch (error) {
      console.error("Error en la autenticación:", error);
      Swal.fire({
        icon: "error",
        title: "Error en la autenticación",
        text: "Por favor verifica tus credenciales e intenta nuevamente.",
      });
    }
  };

  if (!isAuthenticated && !publicPaths.includes(window.location.pathname)) {
    return null; // Evita renderizar contenido no autorizado
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mb-4"
      >
        <h2 className="text-4xl font-bold mb-4 text-center text-[#00294f]">
          Login Admin
        </h2>
        <div className="mb-4">
          <label className="block text-[#00294f] font-bold mb-2">Admin</label>
          <input
            type="text"
            placeholder="nombre"
            value={username}
            onChange={handleAdminChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="text-[#00294f] block font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            placeholder="*********"
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#0062BC] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginAdmin;
