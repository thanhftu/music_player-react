import React, { useEffect, useState } from "react";
import MainScreenContainer from "../MainScreenContainer";
import APIKit from "../../spotify";
import { useNavigate } from "react-router-dom";
import PlaylistCard from "./PlaylistCard";

function Library() {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    APIKit.get("me/playlists").then((res) => {
      setPlaylists(res.data.items);
    });
  }, []);
  console.log(playlists);
  const navigate = useNavigate();
  const playPlaylist = (id: string) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <MainScreenContainer>
      <div className="w-11/12 h-10/12 flex gap-3 flex-wrap overflow-y-auto justify-between p-5">
        {playlists?.map((playlist: any) => (
          <PlaylistCard
            key={playlist.id}
            id={playlist.id}
            imgSrc={playlist.images[0].url}
            name={playlist.name}
            songNumber={playlist.tracks.total}
            onClick={playPlaylist}
          />
        ))}
      </div>
    </MainScreenContainer>
  );
}

export default Library;
