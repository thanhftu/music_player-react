import React from "react";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

interface SidebarButtonProps {
  title: string;
  link: string;
  icon: IconType;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  title,
  link,
  icon: Icon,
}) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link to={link}>
      <div
        className={`w-[70px] h-[70px] rounded-2xl flex flex-col items-center justify-center p-2 transition opacity-1 hover:bg-tct_cybian-100  hover:text-white active:bg-tct_cybian-200 active:text-white active:scale-105
        ${isActive ? "text-white" : "text-tct_cybian-100"}
        ${isActive ? "bg-tct_cybian-100" : "bg-tct_cybian-200"}
      `}
      >
        <Icon size={37} />
        <p className="text-sm">{title}</p>
      </div>
    </Link>
  );
};

export default SidebarButton;
