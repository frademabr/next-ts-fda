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
    <div className="-mt-80">
      <m.div className="w-full sm:mt-20">
        <Image src={skynight} alt="hero_image1" width={1600} loading="lazy" />
        <h1 className="mb-40 tracking-tighter text-center lg:text-9xl sm:text-7xl motion-preset-blur-up-lg motion-duration-2000 -mt-60 text-pretty h1-seo">
          FRADEMA
        </h1>
      </m.div>

      <m.div className="w-full -mt-60">
        <Image className="mt-20" src={nyblue} alt="hero_image2" width={1600} loading="lazy" />
      </m.div>
    </div>
  );
}
