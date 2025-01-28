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
    <section className="">
      <m.div className=" lg:-mb-10">
        <Image className="object-cover" src={bluesky} alt="hero_image1" />
      </m.div>

      <div className="lg:-mt-[240px]">
        <h1 className=" tracking-tighter text-center lg:text-[220px] md:text-[180px] sm:text-[120px]  font-bold lg:mb-20">
          FRADEMA
        </h1>
      </div>

      <div className="">
        <Image
          className="object-cover lg:-mt-50 md:-mt-30 sm:-mt-12"
          src={nyblue}
          alt="hero_image2"
        />
      </div>
    </section>
  );
}
