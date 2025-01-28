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
    <div className="object-cover w-full h-auto">
      <m.div className="-mt-10">
        <Image src={bluesky} alt="hero_image1" width={1600} />

        <h1 className="tracking-tighter text-center -mt-60 md:text-7xl sm:text-5xl text-pretty h1-seo">
          FRADEMA
        </h1>
      </m.div>
      <m.div className="w-full -mt-60">
        <Image className="" src={nyblue} alt="hero_image2" width={1600} />
      </m.div>
    </div>
  );
}
