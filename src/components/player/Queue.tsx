import React from "react";
import { PlayerList, Track } from "./models";

interface QueueProps {
  tracks?: PlayerList[];
  setcurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
const Queue: React.FC<QueueProps> = ({ tracks, setcurrentIndex }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[35%] rounded-md rounded-tr-none bg-[#3e61d2] bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="h-[85%] w-[80%] flex flex-col justify-between">
        <p className="font-md text-slate-100 text-left m-2">Up Mext</p>
        <div className="h-[80%] w-[100%] overflow-y-auto">
          {tracks?.map((track, index) => (
            <div
              key={index}
              className="flex flex-row justify-between py-2 font-md text-sm text-slate-100 cursor-pointer hover:scale-95"
            >
              <p className="m-0 w-[75%] text-ellipsis transition-all">
                {track.track.name}
              </p>
              <p className="m-0">0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
