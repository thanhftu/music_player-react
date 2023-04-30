import React from "react";

function WaveAnimation(isPlaying: { isPlaying: boolean }) {
  return (
    <div className="flex flex-row justify-between h-[54px] w-[108px]">
      <div
        className={`h-full w-[4px] bg-gradient-to-b from-[#364562] opacity-25 to-[#C96850] scale-[0.4] rounded-md ${
          isPlaying ? "animate-quiet" : ""
        }`}
      ></div>
      <div
        className={`${
          isPlaying ? "animate-normal" : ""
        } h-full w-[4px] bg-gradient-to-b from-[#364562] opacity-25 to-[#C96850] scale-[0.4] rounded-md `}
      ></div>
      <div
        className={`h-full w-[4px] bg-gradient-to-b from-[#364562] opacity-25 to-[#C96850] scale-[0.4] rounded-md ${
          isPlaying ? "animate-quiet" : ""
        }`}
      ></div>
      <div
        className={`${
          isPlaying ? "animate-loud" : ""
        } h-full w-[4px] bg-gradient-to-b from-[#364562] opacity-70 to-[#C96850] scale-[0.4] rounded-md `}
      ></div>
      <div
        className={`h-full w-[4px] bg-gradient-to-b from-[#364562] opacity-70 to-[#C96850] scale-[0.4] rounded-md ${
          isPlaying ? "animate-quiet" : ""
        }`}
      ></div>
      <div
        className={`${
          isPlaying ? "animate-normal" : ""
        } h-full w-[4px] bg-gradient-to-b from-[#364562] opacity-70 to-[#C96850] scale-[0.4] rounded-md `}
      ></div>
      <div
        className={`h-full w-[4px] bg-gradient-to-b from-[#364562] opacity-70 to-[#C96850] scale-[0.4] rounded-md ${
          isPlaying ? "animate-quiet" : ""
        }`}
      ></div>
    </div>
  );
}

export default WaveAnimation;
