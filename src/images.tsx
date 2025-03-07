import { Image } from "@/types";
import { CSSProperties, ImgHTMLAttributes } from "react";

export function toImg(
  image: Image,
  props?: ImgHTMLAttributes<HTMLImageElement>
) {
  return <img {...props} src={image.src} alt={image.alt} />;
}

export const logo: Image = {
  src: "/logo.png",
  alt: "Purple lines arranged in a circle all pointing at the center",
};

export const logoWhite: Image = {
  src: "/logo-white.png",
  alt: "White lines arranged in a circle all pointing at the center.",
};

export function logoSvg(fill: string, width: number = 48, height: number = 48) {
  const style: CSSProperties = {
    fontVariationSettings: "normal",
    opacity: "1",
    vectorEffect: "none",
    fill,
    fillOpacity: "1",
    stroke: "none",
    strokeWidth: "4",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    strokeMiterlimit: "10",
    strokeDasharray: "none",
    strokeDashoffset: "0",
    strokeOpacity: "1",
    stopColor: "#000000",
    stopOpacity: "1",
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512.00006 512.00006"
      version="1.1"
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title desc"
    >
      <title id="title">Logo</title>
      <desc id="desc">
        Lines arranged in a circle all pointing at the center.
      </desc>
      <defs id="defs1" />
      <g id="g15" transform="translate(-75.45163,-126.66646)" style={style}>
        <rect
          style={style}
          id="rect2"
          width="80"
          height="240"
          x="435.4516"
          y="126.66646"
          transform="matrix(0.64000003,0,0,0.4266667,27.162585,72.6221)"
        />
        <rect
          style={style}
          id="rect2-7"
          width="51.200001"
          height="102.4"
          x="452.77875"
          y="-90.32695"
          transform="rotate(30)"
        />
        <g id="layer1-5" transform="translate(0,85.664406)" style={style} />
        <rect
          style={style}
          id="rect3"
          width="51.200001"
          height="102.4"
          x="471.52466"
          y="-351.71231"
          transform="rotate(60)"
        />
        <rect
          style={style}
          id="rect4"
          width="51.200001"
          height="102.4"
          x="357.06647"
          y="-587.45166"
          transform="rotate(90)"
        />
        <rect
          style={style}
          id="rect8"
          width="51.200001"
          height="102.4"
          x="140.07307"
          y="-734.37878"
          transform="rotate(120)"
        />
        <rect
          style={style}
          id="rect9"
          width="51.200001"
          height="102.4"
          x="-121.31231"
          y="-753.12469"
          transform="rotate(150)"
        />
        <rect
          style={style}
          id="rect10"
          width="51.200001"
          height="102.4"
          x="-357.0517"
          y="-638.6665"
          transform="scale(-1)"
        />
        <rect
          style={style}
          id="rect11"
          width="51.200001"
          height="102.4"
          x="-503.97882"
          y="-421.6731"
          transform="rotate(-150)"
        />
        <rect
          style={style}
          id="rect12"
          width="51.200001"
          height="102.4"
          x="-522.72467"
          y="-160.28767"
          transform="rotate(-120)"
        />
        <rect
          style={style}
          id="rect13"
          width="51.200001"
          height="102.4"
          x="-408.26645"
          y="75.45163"
          transform="rotate(-90)"
        />
        <rect
          style={style}
          id="rect14"
          width="51.200001"
          height="102.4"
          x="-191.2731"
          y="222.37874"
          transform="rotate(-60)"
        />
        <rect
          style={style}
          id="rect15"
          width="51.200001"
          height="102.4"
          x="70.112274"
          y="241.12465"
          transform="rotate(-30)"
        />
      </g>
    </svg>
  );
}
