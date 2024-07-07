// import React from "react";

// const CardSucursal = () => {
//   const branch = [
//     {
//       branchImg:
//         "https://res.cloudinary.com/dn5ltihzv/image/upload/v1720374369/imagenes/Imagen%20sucursal.png",
//       Nombre: "Nombre",
//       País: "Argentina",
//       Ciudad: "Ciudad",
//       Gerente: "Messi",
//     },
//     {
//       branchImg:
//         "https://res.cloudinary.com/dn5ltihzv/image/upload/v1720374369/imagenes/Imagen%20sucursal.png",
//       Nombre: "Nombre",
//       País: "Argentina",
//       Ciudad: "Ciudad",
//       Gerente: "Messi",
//     },
//     {
//       branchImg:
//         "https://res.cloudinary.com/dn5ltihzv/image/upload/v1720374369/imagenes/Imagen%20sucursal.png",
//       Nombre: "Nombre",
//       País: "Argentina",
//       Ciudad: "Ciudad",
//       Gerente: "Messi",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       {branch.map((branch, index) => (
//         <div
//           key={index}
//           className="w-full rounded-lg max-w-7xl bg-base-100 shadow-xl m-4 flex flex-col items-center no-underline hover:no-underline"
//         >
//           <div className="w-[60rem] p-6 flex flex-col md:flex-row items-center justify-center">
//             <img
//               src={branch.branchImg}
//               alt={branch.Nombre}
//               className="w-24 h-24 object-cover mb-4 md:mb-0 md:mr-6"
//             />
//             <div className="flex flex-col md:flex-row md:items-center w-full justify-between text-center md:text-left">
//               <p className="text-lg text-[#00294f] font-bold mb-2 md:mb-0 ml-5">
//                 {branch.Nombre}
//               </p>
//               <p className="text-lg text-[#00294f] font-bold mb-2 md:mb-0">
//                 {branch.País}
//               </p>
//               <p className="text-lg text-[#00294f] font-bold mb-2 md:mb-0">
//                 {branch.Ciudad}
//               </p>
//               <p className="text-lg text-[#00294f] font-bold">
//                 {branch.Gerente}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardSucursal;
