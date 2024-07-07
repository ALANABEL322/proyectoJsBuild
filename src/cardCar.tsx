// import React from "react";

// const CardCar = () => {
//   const cars = [
//     {
//       carImg:
//         "https://res.cloudinary.com/dn5ltihzv/image/upload/v1719519366/imagenes/veh%C3%ADculo.png",
//       model: "Ford focus",
//       capacity: "650kg",
//       plate: "AB-566-MI",
//       branch: "Sucursal San Martin",
//     },
//     {
//       carImg:
//         "https://res.cloudinary.com/dn5ltihzv/image/upload/v1719519366/imagenes/veh%C3%ADculo.png",
//       model: "Ford Focus",
//       capacity: "350kg",
//       plate: "CI-233-PP",
//       branch: "Montevideo",
//     },
//     {
//       carImg:
//         "https://res.cloudinary.com/dn5ltihzv/image/upload/v1719519366/imagenes/veh%C3%ADculo.png",
//       model: "Ford focus",
//       capacity: "450kg",
//       plate: "UJ-573-LK",
//       branch: "Roca",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       {cars.map((car, index) => (
//         <div
//           key={index}
//           className="w-full max-w-7xl bg-base-100 shadow-xl m-4 flex flex-col items-center no-underline hover:no-underline"
//         >
//           <div className="w-[60rem] p-6 flex flex-col md:flex-row items-center justify-center">
//             <img
//               src={car.carImg}
//               alt={car.model}
//               className="w-1/5 h-30 object-cover mb-4 md:mb-0 md:mr-6"
//             />
//             <div className="flex flex-col md:flex-row md:items-center w-full justify-between text-center md:text-left">
//               <p className="text-lg text-[#00294f] font-bold mb-2 md:mb-0">
//                 {car.model}
//               </p>
//               <p className="text-lg text-[#00294f] font-bold mb-2 md:mb-0">
//                 {car.capacity}
//               </p>
//               <p className="text-lg text-[#00294f] font-bold mb-2 md:mb-0">
//                 {car.plate}
//               </p>
//               <p className="text-lg text-[#00294f] font-bold">
//                 {car.branch}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardCar;
