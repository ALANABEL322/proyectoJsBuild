// import React from "react";

// const CardSistemaDeRutas = () => {
//   const sucursal = [
//     {
//       Inicio: "Inicio",
//       Sucursal: "Sucursal-A",
//       Distancia: "Distacia-11-22-33",
//       Tiempo: "12-34-56",
//     },
//     {
//       Inicio: "Inicio",
//       Sucursal: "Sucursal-B",
//       Distancia: "Distacia-11-22-33",
//       Tiempo: "12-34-56",
//     },
//     {
//       Inicio: "Inicio",
//       Sucursal: "Sucursal-C",
//       Distancia: "Distacia-11-22-33",
//       Tiempo: "12-34-56",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       {sucursal.map((sur, index) => (
//         <div
//           key={index}
//           className="w-full max-w-7xl bg-base-100 shadow-xl m-4 flex flex-col items-center no-underline hover:no-underline"
//         >
//           <div className="w-[60rem] p-14 flex flex-col md:flex-row items-center justify-center">
//             <div className="flex flex-col md:flex-row md:items-center w-full justify-between text-center md:text-left">
//               <p className="text-lg text-[#00294f] font-bold mb-2 md:mb-0">
//                 {sur.Inicio}
//               </p>
//               <p className="text-lg text-[#00294f] font-bold mb-2 md:mb-0">
//                 {sur.Sucursal}
//               </p>
//               <p className="text-lg text-[#00294f] font-bold mb-2 md:mb-0">
//                 {sur.Distancia}
//               </p>
//               <p className="text-lg text-[#00294f] font-bold">{sur.Tiempo}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardSistemaDeRutas;
