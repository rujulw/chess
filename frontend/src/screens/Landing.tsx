import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
    // redirect user
    const navigate = useNavigate();
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        {/* Container */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full p-8 md:p-12">
  
          {/* Left Side (Image) */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="/chessboard.png" 
              alt="Chess Board"
              className="w-full h-auto object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
  
          {/* Right Side (Content) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-6 tracking-wide leading-tight">
              Welcome to Chess
            </h1>
  
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
            Play Chess Online on the #2 Site! 
            <span className="block mt-2">
                Challenge players from around the globe and sharpen your skills.
            </span>
            </p>
  
            {/* Call-to-action Button */}
            <Button onClick={() => {
              navigate("/game")
            }}>
              Play Online
            </Button>
          </div>
        </div>
      </div>
    );
  };
