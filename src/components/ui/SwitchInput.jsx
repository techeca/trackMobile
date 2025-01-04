import React, { useState } from 'react';

export function SwitchInput() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div className="px-3">
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} className="hidden" />
        <span className="relative">
          {/* Background of the switch */}
          <span className="block w-12 h-6 bg-gray-400 rounded-full"></span>
          {/* Circle of the switch */}
          <span className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-transform transform duration-300 ease-in-out ${isChecked ? 'translate-x-6' : ''}`}></span>
        </span>
      </label>
    </div>
  );
};

