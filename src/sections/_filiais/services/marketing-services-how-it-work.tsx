import type { BoxProps } from "@mui/material/Box";

// import { varAlpha } from "minimal-shared/utils";

import Box from "@mui/material/Box";

import { CONFIG } from "src/global-config";
import { m } from "framer-motion";

import bluesky from "public/assets/images/home/bluesky.jpg";
import nyblue from "public/assets/images/home/nyblue.png";

import Image from "next/image";
import { Container } from "@mui/material";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export function MarketingServicesHowItWork({ sx, ...other }: BoxProps) {
  return (
    <div className="">
      <m.div className="object-cover w-full">
        <Image src={bluesky} alt="hero_image1" height={1400} width={1600} />

        <h1 className="tracking-tighter text-center -mt-96 md:text-7xl md:-mb-60 sm:text-5xl sm:-mb-20 text-pretty h1-seo">
          FRADEMA
        </h1>
      </m.div>
      <m.div className="object-cover w-full -mt-60 ">
        <Image className="" src={nyblue} alt="hero_image2" width={1600} />
      </m.div>
    </div>
  );
}
