import type { BoxProps } from "@mui/material/Box";

// import { varAlpha } from "minimal-shared/utils";

import Box from "@mui/material/Box";

import { CONFIG } from "src/global-config";
import { m } from "framer-motion";

import skynight from "public/assets/images/home/skynight.jpg";
import nyblue from "public/assets/images/home/nyblue.png";

import Image from "next/image";
import { Container } from "@mui/material";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export function MarketingServicesHowItWork({ sx, ...other }: BoxProps) {
  return (
    <div className="-mt-96">
      <m.div className="w-full sm:mt-40">
        <Image src={skynight} alt="hero_image1" width={1600} loading="lazy" />
        <h1 className="tracking-tighter text-center -mt-60 md:text-7xl md:-mb-60 sm:text-5xl sm:-mb-20 text-pretty h1-seo">
          FRADEMA
        </h1>
      </m.div>

      <m.div className="w-full -mt-80 sm:-mt-0">
        <Image className="" src={nyblue} alt="hero_image2" width={1600} loading="lazy" />
      </m.div>
    </div>
  );
}
