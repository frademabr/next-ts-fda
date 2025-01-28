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
<<<<<<< HEAD
    <div className="-mt-60">
      <m.div className="w-full sm:mt-60">
        <Image src={bluesky} alt="hero_image1" height={1400} width={1600} />
=======
    <div className="-mt-96">
      <m.div className="object-cover w-full h-auto sm:mt-60">
        <Image src={bluesky} alt="hero_image1" width={1600} loading="lazy" />
>>>>>>> 7d924b7e488ccc755f7ea9b9f4968f4777de2d44
        <h1 className="tracking-tighter text-center -mt-96 md:text-7xl md:-mb-60 sm:text-5xl sm:-mb-20 text-pretty h1-seo">
          FRADEMA
        </h1>
      </m.div>

      <m.div className="object-cover w-full h-auto -mt-80 sm:-mt-0">
        <Image className="" src={nyblue} alt="hero_image2" width={1600} loading="lazy" />
      </m.div>
    </div>
  );
}
