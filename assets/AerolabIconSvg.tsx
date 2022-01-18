interface Props {
  width?: number;
  height?: number;
  color?: "white" | "dark" | "gradient";
  className?: string;
  bg?: "white" | "dark" | "gradient" | "gray";
}

const AerolabIconSvg = ({
  width = 24,
  height = 24,
  color = "white",
  className,
  bg,
}: Props) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={
        color === "white"
          ? "white"
          : color === "dark"
          ? "#252F3D"
          : "url(#paint0_linear_485_5621)"
      }
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient
        id="paint0_linear_485_5621"
        x1="-1.34063"
        y1="-1.02"
        x2="29.9317"
        y2="5.89457"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#176FEB" />
        <stop offset="1" stopColor="#FF80FF" />
      </linearGradient>
      <path
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        fill={
          bg === "white"
            ? "white"
            : bg === "dark"
            ? "#252F3D"
            : bg === "gray"
            ? "#8FA3BF"
            : "url(#paint0_linear_485_5621)"
        }
      />
      <g clipPath="url(#clip0_485_5621)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9506 5.4017C14.8652 5.25665 14.6761 5.20691 14.5283 5.2907L9.46809 8.15799C9.35293 8.2233 9.29313 8.35368 9.31984 8.4816L11.0228 16.6496C11.0311 16.6889 11.014 16.747 10.9883 16.7755L10.7814 17.0045C10.3512 17.4807 9.9868 17.7386 9.29416 17.7386C8.51751 17.7386 8.15287 17.3369 7.5755 16.6267C6.88593 15.7786 6.02792 14.7233 3.94176 14.7233H3.89018C3.60565 14.7233 3.375 14.9496 3.375 15.2289C3.375 15.5081 3.60565 15.7345 3.89018 15.7345H3.94176C5.5318 15.7345 6.13326 16.4742 6.77009 17.2574C7.33891 17.9571 7.98362 18.75 9.29416 18.75C10.4255 18.75 11.0481 18.2335 11.5523 17.6755L13.4121 15.6171C13.4121 15.617 17.8356 10.7211 17.8356 10.7211C17.9239 10.6234 17.9386 10.4812 17.8721 10.3681L14.9506 5.4017Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_485_5621">
          <rect
            width="14.625"
            height="13.5"
            fill="white"
            transform="translate(3.375 5.25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AerolabIconSvg;
