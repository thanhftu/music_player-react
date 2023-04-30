import React from "react";

interface CircleProps {
  percentage?: number;

  size: number;
  color: string;
  strokeWidth: string;
}
const Circle: React.FC<CircleProps> = ({
  percentage,
  size,
  color,
  strokeWidth,
}) => {
  const radius = size / 2 - 10;
  const circ = 2 * Math.PI * radius - 10;
  const strokePct = percentage
    ? ((100 - Math.round(percentage)) * circ) / 100
    : 0;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={strokePct}
      strokeLinecap="round"
    ></circle>
  );
};

interface ProgressCircleProps {
  percentage: number;
  isPlaying: boolean;
  image?: string;
  size: number;
  color: string;
}
const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  isPlaying,
  image,
  size,
  color,
}) => {
  return (
    <div className="flex items-center justify-center">
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            percentage={percentage}
            size={size}
            color={color}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFFF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? "active" : ""}
          x={30}
          y={30}
          width={2 * (size / 2 - 30)}
          height={2 * (size / 2 - 30)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={isPlaying ? "active" : ""}
          x={100}
          y={100}
          width={2 * (size / 2 - 100)}
          height={2 * (size / 2 - 100)}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  );
};
export default ProgressCircle;
