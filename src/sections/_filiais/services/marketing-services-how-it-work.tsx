import type { BoxProps } from "@mui/material/Box";

// import { varAlpha } from "minimal-shared/utils";

import Box from "@mui/material/Box";

import { CONFIG } from "src/global-config";
import { m } from "framer-motion";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export function MarketingServicesHowItWork({ sx, ...other }: BoxProps) {
  return (
    <div className="relative w-full md:max-w-full">
      <div className="md:max-h-full">
        <Box
          // component=""
          sx={{ marginTop: "60px" }}
        >
          <div
            className="bg-bottom bg-cover -mb-80"
            style={{
              backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/skynight.jpg)`,

              height: "600px",
            }}
          />

          <m.div className="-mb-60 ">
            <h1 className="ml-5 tracking-tighter text-center text-pretty h1-seo">FRADEMA</h1>
          </m.div>
          <m.div className="mb-5">
            <div
              className="bg-cover "
              style={{
                backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/nyblue.png)`,
                height: "666px",
              }}
            />
          </m.div>
        </Box>
      </div>
    </div>
  );
}
