import React from "react";

export interface WidgetEntryProps {
  title: string;
  subtitle: string;
  image: string;
}

const WidgetEntry: React.FC<WidgetEntryProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div className="flex items-center justify-between mt-1 w-full">
      <img
        src={image}
        alt={title}
        className="h-[50px] w-[50px] rounded-md mr-[10px]"
      />
      <div className="flex flex-col items-end justify-center max-h-[70px]">
        <p className="font-light text-sm text-slate-300 mb-[5px] overflow-hidden mt-1">
          {title}
        </p>
        <p className="font-light text-sm text-slate-300 mb-[5px] ">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default WidgetEntry;
