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

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export function MarketingServicesHowItWork({ sx, ...other }: BoxProps) {
  return (
    <div>
      <div className="page-header clear-filter">
        <Box
          component="section"
          className="rellax-header rellax-header-sky"
          sx={{ marginTop: "40px", paddingBottom: "-60px" }}
        >
          <div
            className="bg-bottom bg-cover -mb-80"
            style={{
              backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/skynight.jpg)`,

              height: "560px",
            }}
          />

          <div className="-mb-60">
            <h1 className="ml-5 h1-seo">FRADEMA</h1>
          </div>
          <div className="mt-5">
            <div
              className="bg-bottom bg-cover "
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
