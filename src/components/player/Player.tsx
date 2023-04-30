import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import MainScreenContainer from "../MainScreenContainer";
import AudioPlayer from "./AudioPlayer";
import Widgets from "./Widgets";
import SongCard from "./SongCard";
import Queue from "./Queue";
import { PlayerList, Track } from "./models";

function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState<PlayerList[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track>();
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(currentTrack);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state.id + "/tracks")
        .then((res) => {
          // console.log(res.data.items);
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);
  useEffect(() => {
    if (tracks.length === 0) return;
    setCurrentTrack(tracks[currentIndex].track);
  }, [tracks, currentIndex]);
  return (
    <MainScreenContainer>
      <div className="flex flex-row h-full w-full">
        <div className="w-[68%] mr-3 h-full">
          <AudioPlayer
            currentTrack={currentTrack}
            total={tracks}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <Widgets artistId={currentTrack?.album.artists[0].id} />
        </div>
        <div className="w-[30%] h-full flex flex-col justify-between">
          <SongCard album={currentTrack?.album} />
          <Queue tracks={tracks} setcurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </MainScreenContainer>
  );
}

export default Player;
