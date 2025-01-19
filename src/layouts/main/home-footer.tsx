import { _socials } from "@/_mock";
import type { BoxProps } from "@mui/material/Box";
import type { ICaseStudyProps } from "@/types/case-study";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "src/assets/icons";

import { Logo } from "src/components/logo";
import { IconButton } from "@mui/material";

// ----------------------------------------------------------------------
type Props = BoxProps & Partial<ICaseStudyProps>;

const year = new Date().getFullYear();

export function HomeFooter({
  sx,
  title,
  website,
  category,
  createdAt,
  description,
  ...other
}: Props) {
  const renderSocials = () => (
    <Box sx={{ display: "flex", marginTop: "10px", marginLeft: "10px" }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {/* {social.value === 'twitter' && <TwitterIcon />} */}
          {social.value === "facebook" && <FacebookIcon />}
          {social.value === "instagram" && <InstagramIcon />}
          {social.value === "linkedin" && <LinkedinIcon />}
        </IconButton>
      ))}
    </Box>
    // BOTAR LINKS DOS SOCIALS DENTRO DOS COMPONENTES ICONS ACIMA
  );

  return (
    <Box component="footer" sx={[{ py: 8 }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Logo isSingle sx={{ mb: 1 }} />

        <Box component="span" sx={{ color: "text.secondary", typography: "caption" }}>
          Fradema Team {year} © All rights reserved.
        </Box>
        {renderSocials()}
      </Container>
    </Box>
  );
}
