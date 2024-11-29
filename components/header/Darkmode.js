"use client"
import { MdOutlineWbSunny, MdOutlineNightsStay } from "react-icons/md";

function DarkMode({ toggleDarkMode, darkMode }) {
    return (
        <button onClick={toggleDarkMode} className="p-2">
            {darkMode ? (
                <MdOutlineNightsStay size={20} className="text-yellow-500" />
            ) : (
                <MdOutlineWbSunny size={20} className="text-black" />
            )}
        </button>
    );
}

export default DarkMode;
