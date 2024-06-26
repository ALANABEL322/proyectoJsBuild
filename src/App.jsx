import React from "react";
import CardRoute from "./CardRoute";

function App() {
  const routes = [
    {
      startingPoint: "Obelisco de Buenos Aires",
      branch: "Sucursal Microcentro",
      vehicle: "MMB-125",
      endingPoint: "Terminal Retiro",
    },
    {
      startingPoint: "Puerto Madero",
      branch: "Sucursal Palermo",
      vehicle: "OPR-202",
      endingPoint: "Aeropuerto Ezeiza",
    },
    {
      startingPoint: "Plaza de Mayo",
      branch: "Sucursal Recoleta",
      vehicle: "AB-343-CI",
      endingPoint: "Estadio Monumental",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {routes.map((route, index) => (
        <CardRoute
          key={index}
          startingPoint={route.startingPoint}
          branch={route.branch}
          vehicle={route.vehicle}
          endingPoint={route.endingPoint}
        />
      ))}
    </div>
  );
}

export default App;
