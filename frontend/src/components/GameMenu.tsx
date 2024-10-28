import React from 'react';

interface GameMenuProps {
    title: string;
    subtitle: string;
    onPlay: () => void;
}

export const GameMenu: React.FC<GameMenuProps> = ({ title, subtitle, onPlay }) => {
    return (
        <div className="bg-purple-600 rounded-lg p-6 max-w-sm mx-auto shadow-lg text-center">
            {/* Title */}
            <h1 className="text-white text-3xl font-bold mb-2">{title}</h1>
            
            {/* Subtitle */}
            <p className="text-gray-300 text-lg mb-4">{subtitle}</p>

            {/* Play Button */}
            <button
                onClick={onPlay}
                className="bg-black text-white font-bold text-xl rounded-lg py-2 px-4 shadow-md hover:bg-gray-800 transition-all duration-300 w-full"
            >
                Start Match
            </button>
        </div>
    );
};