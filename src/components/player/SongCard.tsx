import React from "react";
import { Album, Track } from "./models";
import AlbumImage from "./songcard/AlbumImage";
import AlbumInfo from "./songcard/AlbumInfo";

interface SongCardProps {
  album?: Album;
}
const SongCard: React.FC<SongCardProps> = ({ album }) => {
  return (
    <div className="w-full h-[62%] bg-[#27354d] rounded-t-xl flex flex-col items-center justify-center">
      <AlbumImage url={album?.images[0].url} />
      <AlbumInfo album={album} />
    </div>
  );
};

export default SongCard;
