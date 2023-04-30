import React from "react";
import WidgetEntry, { WidgetEntryProps } from "./WidgetEntry";
import { Album, Artist, PlayerList, Playlist } from "../models";

interface WidgetCardProps {
  title?: string;
  similar?: never[];
  featured?: never[];
  newRelease?: never[];
}
const WidgetCard: React.FC<WidgetCardProps> = ({
  title,
  similar,
  featured,
  newRelease,
}) => {
  console.log(newRelease);

  return (
    <div className="relative w-[30%] h-[74%] rounded-md bg-gradient-to-r from-[#283a58] to-[#364562] py-1 px-3 transition cursor-pointer hover:scale-105 gap-2">
      <p className="text-md font-medium text-slate-200">{title}</p>
      {similar
        ? similar.map((artist: Artist) => (
            <WidgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist: Playlist) => (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album: Album) => (
            <WidgetEntry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
    </div>
  );
};

export default WidgetCard;
