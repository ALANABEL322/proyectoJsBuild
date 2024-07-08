import React, { useState } from "react";

const DropdownButton = ({ label, options, isOpen, onClick, textStyle }) => {
  return (
    <div className="relative w-full text-left mb-2 rounded-lg shadow-xl">
      <p className={`mb-2 ${textStyle}`}>{label}</p>
      <button
        type="button"
        className="inline-flex justify-between items-center w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onClick={onClick}
      >
        <span className="flex-grow text-left"></span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="origin-top-right mt-2 wfull rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <a
                key={index}
                href={option.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownButtons = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const dropdownOptions = [
    { label: "Submenu 1", href: "#" },
    { label: "Submenu 2", href: "#" },
    { label: "Submenu 3", href: "#" },
  ];

  const labels = [
    "Punto de inicio",
    "Vehículos",
    "Sucursal A",
    "Sucursal B",
    "Sucursal C",
    "Sucursal D",
  ];

  const textStyles = [
    "text-[#00204F] text-xl",
    "text-[#00204F] text-lg",
    "text-[#00204F] text-xl",
    "text-[#00204F] text-lg",
    "text-[#00204F] text-xl",
    "text-[#00204F] text-lg",
  ];

  const handleDropdownClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 w-3/4">
      {labels.map((label, index) => (
        <DropdownButton
          key={index}
          label={label}
          options={dropdownOptions}
          isOpen={openIndex === index}
          onClick={() => handleDropdownClick(index)}
          textStyle={textStyles[index]}
        />
      ))}
    </div>
  );
};

export default DropdownButtons;
