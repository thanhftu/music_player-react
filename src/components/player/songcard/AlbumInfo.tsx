import React from "react";
import { Album } from "../models";

interface AlbumInfoProps {
  album?: Album;
}

const AlbumInfo: React.FC<AlbumInfoProps> = ({ album }) => {
  const artists: string[] = [];
  album?.artists.forEach((artist) => artists.push(artist.name));
  return (
    <div className="mt-3 w-[80%]">
      <div className="w-full overflow-hidden font-medium text-slate-300">
        <div className="inline-block animate-marquee whitespace-nowrap pl-[100%]">
          <p className="text-sm font-light mx-[5px] my-auto">
            {album?.name + "-" + artists.join(", ")}
          </p>
        </div>
      </div>
      <div className="text-sm font-light text-slate-300 line-clamp-2">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists.join(
          ", "
        )} with ${album?.total_tracks} tracks`}</p>
      </div>
      <div className="text-[#9aa9c2] text-sm font-light">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
