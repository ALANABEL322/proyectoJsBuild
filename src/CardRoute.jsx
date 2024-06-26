import React from "react";

const CardRoute = ({ startingPoint, branch, vehicle, endingPoint }) => {
  return (
    <a
      href="http://localhost:8069/route-profile"
      className="card w-full md:w-5/6 lg:w-3/4 bg-base-100 shadow-xl m-4 flex flex-col no-underline hover:no-underline"
    >
      <div className="card-body flex flex-col md:flex-row items-center">
        <div className="flex flex-wrap justify-between w-full">
          <p className="text-lg text-[#00294f] font-bold mb-2 w-full md:w-auto">
            {startingPoint}
          </p>
          <p className="text-lg text-[#00294f] font-bold mb-2 w-full md:w-auto">
            {branch}
          </p>
          <p className="text-lg text-[#00294f] font-bold mb-2 w-full md:w-auto">
            Vehicle: {vehicle}
          </p>
          <p className="text-lg text-[#00294f] font-bold w-full md:w-auto">
            {endingPoint}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardRoute;
