import React, { useState, useRef, useEffect } from "react";
import { colors } from '../../utils/colors'

export default function CustomSelectColor({selectedColor, setSelectedColor}) {
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    const selectColor = (color) => {
        setSelectedColor(color);
        setIsDropdownOpen(false);
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full mx-auto" ref={dropdownRef}>
            {/* Selected Color Display */}
            <div className="flex items-center justify-between w-full cursor-pointer border-[1px] rounded-2xl h-[48px] px-2 border-nig-50/30 focus:outline-none focus:border-2 focus:border-nig-50" onClick={toggleDropdown}>
                <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full mr-3 ${selectedColor.value}`}></div>
                    <span className="text-nig-10 font-medium">{selectedColor.name}</span>
                </div>
                <span className="text-gray-500">{isDropdownOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 14l-5-5l-5 5"></path></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5"></path></svg>
                }
                </span>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute w-full bg-nig-80 mt-1 border border-nig-50/30 rounded-lg shadow-lg z-10">
                    {colors.map((color) => (
                        <div key={color.value} className="flex relative items-center px-4 py-3 cursor-pointer hover:bg-nig-50"
                            onClick={() => selectColor(color)}>
                            <div className={`${color.value} w-6 h-6 rounded-full mr-3`}></div>
                            <span className="text-nig-10 font-medium">{color.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
