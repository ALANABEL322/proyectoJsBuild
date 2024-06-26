import React from "react";
import CardBranch from "./CardBranch";

function App() {
  const branches = [
    {
      sucursalImg:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1719373671/tpyydathn0rvm6n95t8o.webp",
      name: "Sucursal Mendoza",
      country: "Argentina",
      city: "Taco pozo",
      manager: "Encargado: juan manuel hez",
    },
    {
      sucursalImg:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1719373683/glmdljna4teroatpbt0o.webp",
      name: "Sucursal andreani",
      country: "Argentina",
      city: "La plata",
      manager: "Encargado: diego garcía",
    },
    {
      sucursalImg:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1719373688/n2pnfei9byktoiecw7uk.png",
      name: "Correo argentino",
      country: "Argentina",
      city: "Rosario",
      manager: "Encargado: juana quevedo",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {branches.map((branch, index) => (
        <CardBranch
          key={index}
          sucursalImg={branch.sucursalImg}
          name={branch.name}
          country={branch.country}
          city={branch.city}
          manager={branch.manager}
        />
      ))}
    </div>
  );
}

export default App;
