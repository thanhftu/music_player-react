import React, { useState, useRef, useEffect } from "react";
import { PlayerList, Track } from "./models";
import MainScreenContainer from "../MainScreenContainer";
import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./songcard/WaveAnimation";
import Control from "./songcard/Control";

interface AudioPlayerProps {
  currentTrack?: Track;
  total: PlayerList[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
const AudioPlayer: React.FC<AudioPlayerProps> = ({
  currentIndex,
  currentTrack,
  total,
  setCurrentIndex,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const audioSrc = total[currentIndex]?.track.preview_url;
  const audioRef = useRef(new Audio(total[0]?.track.preview_url));
  const intervalRef = useRef<number>();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);
  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZero = (n: number) => {
    return n > 9 ? "" + n.toString() : "0" + n.toString();
  };

  const artists: string[] = [];
  currentTrack?.album.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  return (
    <div className="w-full h-[40%] mx-3 my-0 flex">
      <div className="w-[37%]">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album.images[0].url}
          size={250}
          color="#C96850"
        />
      </div>
      <div className="w-[63%] flex flex-col justify-between items-center">
        <p className="text-slate-200 text-3xl font-semibold inline-block whitespace-nowrap text-center">
          {currentTrack?.name}
        </p>
        <p className="text-sm font-light text-slate-300">
          {artists.join(" | ")}
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <p className="text-sm font-semibold m-0 text-[#c4d0e3]">
              0:{addZero(Math.round(trackProgress))}
            </p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="text-sm font-semibold m-0 text-[#c4d0e3]">0:30</p>
          </div>
          <Control
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
