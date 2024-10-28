import React from "react";

interface PlayButtonProps {
  onClick: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
    >
      <h2 className="text-2xl">PLAY</h2>
    </button>
  );
};

export default PlayButton;