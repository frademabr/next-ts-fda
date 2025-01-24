import type { ButtonProps } from "@mui/material/Button";
import type { Theme, SxProps } from "@mui/material/styles";

import { varAlpha } from "minimal-shared/utils";

import Button from "@mui/material/Button";

import { paths } from "src/routes/paths";

import { AnimateBorder, varFade } from "src/components/animate";
import { Typography } from "@mui/material";
import { Iconify } from "@/components/iconify";
import type { Variants } from "framer-motion";
import { m } from "framer-motion";

// ----------------------------------------------------------------------

// export type PurchaseButtonProps = {
//   sx?: SxProps<Theme>;
//   slotProps?: {
//     button?: ButtonProps<"a">;
//   };
// };

export function PurchaseButton() {
  const variants: Variants = varFade("inUp", { distance: 24 });
  return (
    // <AnimateBorder
    //   sx={[
    //     {
    //       borderRadius: 1,
    //       position: "relative",
    //       bgcolor: "text.primary",
    //       color: "background.paper",
    //     },
    //     ...(Array.isArray(sx) ? sx : [sx]),
    //   ]}
    //   duration={6}
    //   slotProps={{
    //     outlineColor: (theme) =>
    //       `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.warning.mainChannel, 0.04)})`,
    //     primaryBorder: {
    //       size: 42,
    //       width: "2px",
    //       sx: (theme) => ({
    //         color: theme.vars.palette.primary.main,
    //       }),
    //     },
    //     secondaryBorder: {
    //       sx: (theme) => ({
    //         color: theme.vars.palette.primary.main,
    //       }),
    //     },
    //   }}
    // >
    <m.div variants={variants}>
      <button className="p-2 text-white bg-green-500 rounded-lg motion-preset-pulse-sm text-pretty hover:bg-green-600">
        <a
          target="_blank"
          href="https://wa.me/5521970346980?text=Welcome%20to%20Fradema%20Tax Consulting"
          rel="noreferrer"
        >
          <Iconify className="mr-2" width={18} icon="logos:whatsapp-icon" />
          WhatsApp
        </a>
      </button>
    </m.div>
  );
}
