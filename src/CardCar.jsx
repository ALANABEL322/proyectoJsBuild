// CardBranch.js
import React from "react";

const CardCar = ({ carImg, model, capacity, plate, branch }) => {
  return (
    <a
      href="http://localhost:8069/branch-profile"
      className="card w-full md:w-5/6 lg:w-3/4 bg-base-100 shadow-xl m-4 flex flex-col no-underline hover:no-underline"
    >
      <div className="card-body flex flex-col md:flex-row items-center">
        <img
          src={carImg}
          alt={model}
          className="w-32 h-20 rounded-full object-cover mr-0 md:mr-6 mb-4 md:mb-0"
        />
        <div className="flex flex-wrap justify-between w-full">
          <p className="text-lg text-[#00294f] font-bold mb-2 w-full md:w-auto">
            {model}
          </p>
          <p className="text-lg text-[#00294f] font-bold mb-2 w-full md:w-auto">
            capacidad {capacity}
          </p>
          <p className="text-lg text-[#00294f] font-bold mb-2 w-full md:w-auto">
            placa {plate}
          </p>
          <p className="text-lg text-[#00294f] font-bold w-full md:w-auto">
            {branch}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardCar;
