import React from "react";
import CardCar from "./CardCar";

function App() {
  const cars = [
    {
      carImg:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1719378924/fsjphd804vv0lkq7zezl.webp",
      model: "Ford focus",
      capacity: "650kg",
      plate: "AB-566-MI",
      branch: "Branch not asigned",
    },
    // {
    //   sucursalImg:
    //     "https://res.cloudinary.com/dkpotpaaf/image/upload/v1719373683/glmdljna4teroatpbt0o.webp",
    //   name: "Sucursal andreani",
    //   country: "Argentina",
    //   city: "La plata",
    //   manager: "Encargado: diego garcía",
    // },
    // {
    //   sucursalImg:
    //     "https://res.cloudinary.com/dkpotpaaf/image/upload/v1719373688/n2pnfei9byktoiecw7uk.png",
    //   name: "Correo argentino",
    //   country: "Argentina",
    //   city: "Rosario",
    //   manager: "Encargado: juana quevedo",
    // },
  ];

  return (
    <div className="flex flex-col items-center">
      {cars.map((car, index) => (
        <CardCar
          key={index}
          carImg={car.carImg}
          model={car.model}
          capacity={car.capacity}
          plate={car.plate}
          branch={car.branch}
        />
      ))}
    </div>
  );
}

export default App;
