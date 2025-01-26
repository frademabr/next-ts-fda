import type { BoxProps } from "@mui/material/Box";
import type { ICaseStudyProps } from "src/types/case-study";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { fDate } from "src/utils/format-time";

import { _socials, _whats } from "src/_mock";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "src/assets/icons";
import { Iconify } from "src/components/iconify";
import type { Variants } from "framer-motion";
import { m } from "framer-motion";
import { varFade } from "@/components/animate";

// ----------------------------------------------------------------------

type Props = BoxProps & Partial<ICaseStudyProps>;

export function MarketingCaseStudyDetailsSummary({
  sx,
  title,
  website,
  category,
  createdAt,
  description,
  ...other
}: Props) {
  const renderSocials = () => (
    <Box sx={{ display: "flex" }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {/* {social.value === 'twitter' && <TwitterIcon />} */}
          {social.value === "facebook" && <FacebookIcon />}
          {social.value === "instagram" && <InstagramIcon />}
          {social.value === "linkedin" && <LinkedinIcon />}
        </IconButton>
      ))}
    </Box>
  );

  const variants: Variants = varFade("inUp", { distance: 24 });

  const renderWhats = () => {
    <Box sx={{ display: "flex" }}>
      {_whats.map((what) => (
        <Iconify key={what} width={16} icon="logos:whatsapp-icon">
          <a href={what}>WhatsApp</a>
        </Iconify>
      ))}
    </Box>;
  };

  const renderDivider = () => <Divider sx={{ my: 3, borderStyle: "dashed" }} />;

  const renderItem = (label: string, value?: string | React.ReactNode) => (
    <Box sx={{ "&:not(:first-of-type)": { mt: 2 } }}>
      <Typography variant="overline" sx={{ mb: 1, display: "block", color: "text.disabled" }}>
        {label}
      </Typography>
      {typeof value === "string" ? <Typography variant="body2">{value}</Typography> : value}
    </Box>
  );

  return (
    <Box
      sx={[
        {
          p: 5,
          display: "flex",
          borderRadius: 2,
          flexDirection: "column",
          bgcolor: "background.neutral",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography variant="overline" sx={{ mb: 2, color: "text.disabled" }}>
        Contatos
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>

      {renderDivider()}

      <Box sx={{ display: "flex" }}>
        {_whats.map((what) => (
          <a key={what} target="_blank" rel="noreferrer" href={what}>
            WhatsApp
          </a>
          // <Iconify key={what} width={16} icon="logos:whatsapp-icon">

          // </Iconify>
        ))}
      </Box>

      <a href={website}>TEST</a>

      {renderDivider()}

      <Box sx={{ gap: 1, display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle2">Compartilhe:</Typography>
        {renderSocials()}
      </Box>
    </Box>
  );
}
