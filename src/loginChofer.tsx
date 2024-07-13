// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const LoginChofer = () => {
//   const [chofer, setChofer] = useState("");
//   const [placa, setPlaca] = useState("");

//   const handleChoferChange = (e) => {
//     setChofer(e.target.value);
//   };

//   const handlePlacaChange = (e) => {
//     setPlaca(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí puedes manejar la lógica de autenticación
//     console.log("Chofer:", chofer);
//     console.log("Placa:", placa);
//   };


//   return (
//     <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mb-4"
//       >
//         <h2 className="text-4xl font-bold mb-4 text-center text-[#00294f]">
//           Login Chofer
//         </h2>
//         <div className="mb-4">
//           <label className="block text-[#00294f] font-bold mb-2">Chofer</label>
//           <input
//             type="text"
//             placeholder="nombre"
//             value={chofer}
//             onChange={handleChoferChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="text-[#00294f] block font-bold mb-2">Placa</label>
//           <input
//             type="password"
//             value={placa}
//             placeholder="*********"
//             onChange={handlePlacaChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-[#0062BC] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
//         >
//           Entrar
//         </button>
//       </form>
//       <button
    
//         className="flex items-center bg-[#00294f] text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition duration-200"
//       >
//         <FaUser className="mr-2" />
//         Admin
//       </button>
//     </div>
//   );
// };

// export default LoginChofer;
