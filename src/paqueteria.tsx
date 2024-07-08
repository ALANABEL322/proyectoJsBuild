import React from "react";

const Card = ({ fechaEntrada, id, estado }) => {
  return (
    <div className="p-5 w-3/4 border rounded-lg shadow-lg transition-colors duration-300 hover:bg-[#0062BC] hover:text-white text-[#00294f]">
      <div className="flex justify-around">
        <p className="text-lg font-bold  cursor-pointer">
          Fecha de entrada: {fechaEntrada}
        </p>
        <p className="text-lg font-bold  cursor-pointer">ID: {id}</p>
        <p className="text-lg font-bold  cursor-pointer">Estado: {estado}</p>
      </div>
    </div>
  );
};

const Paqueteria = () => {
  const cardData = [
    { fechaEntrada: "2024-07-01", id: "001", estado: "Activo" },
    { fechaEntrada: "2024-07-02", id: "002", estado: "Inactivo" },
    { fechaEntrada: "2024-07-03", id: "003", estado: "Pendiente" },
    { fechaEntrada: "2024-07-04", id: "004", estado: "Activo" },
    { fechaEntrada: "2024-07-05", id: "005", estado: "Inactivo" },
    { fechaEntrada: "2024-07-06", id: "006", estado: "Pendiente" },
    { fechaEntrada: "2024-07-07", id: "007", estado: "Activo" },
    { fechaEntrada: "2024-07-08", id: "008", estado: "Inactivo" },
  ];

  return (
    <div className="flex flex-col items-center p-4 space-y-4 w-full">
      {cardData.map((data, index) => (
        <Card
          key={index}
          fechaEntrada={data.fechaEntrada}
          id={data.id}
          estado={data.estado}
        />
      ))}
    </div>
  );
};

export default Paqueteria;
