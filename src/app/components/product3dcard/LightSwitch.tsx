import { FaLightbulb } from 'react-icons/fa'; // Icono de bombilla
import { useState } from 'react';

const LightSwitch = ({ lightOn, toggleLight }: { lightOn: boolean; toggleLight: () => void }) => {
  return (
    <button
      onClick={toggleLight}
      className="relative flex items-center justify-center w-16 h-16  transition-all"
    >
      <FaLightbulb
        className={`text-3xl transition-transform ${
          lightOn ? 'text-yellow-500 rotate-45' : 'text-gray-600 rotate-0'
        }`}
      />
    </button>
  );
};

export default LightSwitch;