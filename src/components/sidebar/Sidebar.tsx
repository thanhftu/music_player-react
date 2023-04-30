import React from "react";
import SidebarButton from "./SidebarButton";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-[100px] h-full bg-tct_cybian-200 flex flex-col items-center justify-between rounded-l-2xl">
      <Link to={"/"}>
        <div className="w-[50px] h-[50px]  rounded-2xl mt-4 overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
            alt="profile"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-1">
        <SidebarButton title="Feed" link="/feed" icon={MdSpaceDashboard} />
        <SidebarButton title="Trending" link="/trending" icon={FaGripfire} />
        <SidebarButton title="Player" link="/player" icon={FaPlay} />
        <SidebarButton title="Favorites" link="/favorites" icon={MdFavorite} />
        <SidebarButton title="Library" link="/library" icon={IoLibrary} />
      </div>
      <div className="mb-5">
        <SidebarButton title="Sign Out" link="" icon={FaSignOutAlt} />
      </div>
    </div>
  );
}

export default SideBar;
