import React from "react";

interface AlbumImageProps {
  url?: string;
}

const AlbumImage: React.FC<AlbumImageProps> = ({ url }) => {
  return (
    <div className="w-[80%] flex items-center justify-center relative z-[1]">
      <img
        src={url}
        alt="album art"
        className="w-full rounded-md aspect-square"
      />
      <div className="blur-[10px] w-[90%] absolute z-[-1] top-[20px]">
        <img
          src={url}
          alt="shadow"
          // className="blur-[10px] w-[90%] absolute z-[-1] top-[20px]"
        />
      </div>
    </div>
  );
};

export default AlbumImage;
