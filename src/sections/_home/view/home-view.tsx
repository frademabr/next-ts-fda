"use client";

import type { FabProps } from "@mui/material/Fab";
import type { UseBackToTopReturn } from "minimal-shared/hooks";

import { useBackToTop } from "minimal-shared/hooks";

import Fab from "@mui/material/Fab";
import SvgIcon from "@mui/material/SvgIcon";

import { _pricingHome } from "src/_mock";

import { ScrollProgress, useScrollProgress } from "src/components/animate/scroll-progress";

import { HomeFlexibleComponents } from "../home-flexible-components";
import { MarketingServicesHowItWork } from "@/sections/_filiais/services/marketing-services-how-it-work";
import { MarketingContact } from "@/sections/_filiais/contact/marketing-contact";
import { EcommerceLandingHero } from "@/sections/_ecommerce/landing/ecommerce-landing-hero";
import HomeHero from "../home-hero";
import { HomeForDesigner } from "../home-for-designer";
import FaqDark from "@/components/faq-dark/faq-dark";

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  // const { onBackToTop, isVisible } = useBackToTop("90%");

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: "fixed" }}
      />

      <MarketingServicesHowItWork />

      <HomeHero />

      {/* <HomeNewStart /> */}

      <HomeFlexibleComponents />

      <EcommerceLandingHero />

      <MarketingContact />

      <FaqDark />

      {/* <HomeFAQs /> */}

      <HomeForDesigner />
      {/* Typebot no footer e footer geral no layouts */}
    </>
  );
}

// ----------------------------------------------------------------------

type BackToTopProps = FabProps & {
  isVisible: UseBackToTopReturn["isVisible"];
};
