import type { BoxProps } from "@mui/material/Box";

import { varAlpha } from "minimal-shared/utils";

import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineDot from "@mui/lab/TimelineDot";
import Container from "@mui/material/Container";
import TimelineItem from "@mui/lab/TimelineItem";
import Typography from "@mui/material/Typography";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

import { CONFIG } from "src/global-config";
import { m } from "framer-motion";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export function MarketingServicesHowItWork({ sx, ...other }: BoxProps) {
  return (
    <div className="md:max-lg:flex">
      <div className="">
        <Box
          // component=""
          sx={{ marginTop: "50px", paddingBottom: "-60px" }}
        >
          <div
            className="bg-bottom bg-cover shadow-2xl md:shrink-0 -mb-80"
            style={{
              backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/skynight.jpg)`,

              height: "560px",
            }}
          />

          <m.div className="-mb-60">
            <h1 className="ml-5 tracking-tighter h1-seo">FRADEMA</h1>
          </m.div>
          <div className="mt-5">
            <div
              className="bg-bottom bg-cover md:shrink-0"
              style={{
                backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/nyblue.png)`,
                height: "666px",
              }}
            />
          </div>
        </Box>
      </div>
    </div>
  );
}
