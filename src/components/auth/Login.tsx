import React from "react";
import { loginEndpoint } from "../../spotify";

export default function Login() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-7">
      <div className="w-[200px]">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo-spotify"
          className="w-full h-full"
        />
      </div>

      <a
        className="block p-3 bg-white w-[200px] text-center rounded-2xl font-semibold cursor-pointer"
        href={loginEndpoint}
      >
        <div>LOG IN</div>
      </a>
    </div>
  );
}
