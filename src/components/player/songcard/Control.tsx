import React from "react";
import { PlayerList } from "../models";
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPause } from "react-icons/fa";

interface ControlProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  handleNext: () => void;
  handlePrev: () => void;
  total: PlayerList[];
}

const Control: React.FC<ControlProps> = ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
  total,
}) => {
  return (
    <div className="flex flex-row justify-between w-[70%] m-0">
      <div
        onClick={handlePrev}
        className="w-[50px] h-[50px] rounded-md flex items-center justify-center cursor-pointer transition-all"
      >
        <IoPlaySkipBack size={35} color="#C4D0E3" />
      </div>
      <div
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-[70px] h-[70px] rounded-md bg-[#c96850] text-white flex items-center justify-center cursor-pointer shadow"
      >
        {isPlaying ? <FaPause size={35} /> : <IoPlay size={35} />}
      </div>
      <div
        onClick={handleNext}
        className="w-[50px] h-[50px] rounded-md flex items-center justify-center cursor-pointer transition-all"
      >
        <IoPlaySkipForward size={35} color="#C4D0E3" />
      </div>
    </div>
  );
};

export default Control;
