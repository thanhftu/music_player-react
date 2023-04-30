import React from "react";

interface MainScreenContainerProps {
  children: React.ReactNode;
}
const MainScreenContainer: React.FC<MainScreenContainerProps> = ({
  children,
}) => {
  return (
    <div
      className="w-[calc(100%-100px)] h-[100vh] bg-slate-400 tct-background-image border rounded-3xl p-5"
      // style={{.tct_}}
    >
      {children}
    </div>
  );
};

export default MainScreenContainer;
