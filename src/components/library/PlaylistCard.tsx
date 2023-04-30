import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

interface PlaylistCardInterface {
  imgSrc: string;
  id: string;
  name: string;
  songNumber: number;
  onClick: (id: string) => void;
}

const PlaylistCard: React.FC<PlaylistCardInterface> = ({
  imgSrc,
  id,
  name,
  songNumber,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="relative w-[150px] h-[200px] rounded-lg bg-slate-500 p-3 mb-2 transition cursor-pointer hover:scale-105 hover:opacity-70 group"
    >
      <div>
        <img
          src={imgSrc}
          alt="Playlist Image"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <p className="text-sm">{name}</p>
      <p>{songNumber} Songs</p>
      <div className="absolute right-0 bottom-0 opacity-0 flex flex-row justify-end p-1 transition group-hover:opacity-100">
        <AiFillPlayCircle size={30} color="orange" />
      </div>
    </div>
  );
};

export default PlaylistCard;
