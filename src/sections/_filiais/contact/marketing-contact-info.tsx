import type { BoxProps } from "@mui/material/Box";
import type { Theme, SxProps } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { Iconify } from "src/components/iconify";

// ----------------------------------------------------------------------

export function MarketingContactInfo({ sx, ...other }: BoxProps) {
  const rowStyles: SxProps<Theme> = {
    sx: {
      gap: 2,
      display: "flex",
      alignItems: "center",
      alignContent: "flex-start",
      justifyContent: "flex-start",
    },
  };

  const renderAddress = () => (
    <Box {...rowStyles} sx={{ marginTop: "40px" }}>
      <div className="mt-10">
        <Box
          sx={{
            gap: 1,
            display: "flex",
            alignItems: "flex-start",
            typography: "h6",
          }}
        >
          <Iconify width={24} icon="carbon:location" sx={{ mt: "2px" }} />
          Faça uma visita
          <Link>
            <Iconify inline width={18} icon="carbon:launch" />
          </Link>
        </Box>
        <Typography variant="body2" sx={{ marginLeft: "32px" }}>
          Rua México 41, 14o andar, Cinelândia, Rio de Janeiro - RJ
        </Typography>
      </div>
    </Box>
  );

  const renderPhone = () => (
    <Box {...rowStyles}>
      <Iconify width={24} icon="solar:smartphone-outline" sx={{ mt: "2px" }} />
      <div>
        <Box
          sx={{
            gap: 1,
            display: "flex",
            alignItems: "flex-start",
            typography: "h6",
          }}
        >
          Ligue
        </Box>
        <Typography variant="body2">+5521 2217-0600</Typography>
      </div>
    </Box>
  );

  const renderEmail = () => (
    <Box {...rowStyles}>
      <Iconify width={24} icon="carbon:email" sx={{ mt: "2px" }} />
      <div>
        <Box
          sx={{
            gap: 1,
            display: "flex",
            alignItems: "flex-start",
            typography: "h6",
          }}
        >
          Fale conosco
        </Box>
        <Typography variant="body2">
          <Link color="inherit" variant="body2" href="mailto:fradema@fradema.com.br">
            fradema@fradema.com.br
          </Link>
        </Typography>
      </div>
    </Box>
  );

  const renderTime = () => (
    <Box {...rowStyles}>
      <Iconify width={24} icon="solar:clock-circle-outline" sx={{ mt: "2px" }} />
      <div>
        <Box
          sx={{
            gap: 1,
            display: "flex",
            alignItems: "flex-start",
            typography: "h6",
          }}
        >
          Horários da empresa
        </Box>
        <Typography variant="body2">Seg-Quin: 9:00 — 18:00, Sexta: 9:00 — 17:00</Typography>
      </div>
    </Box>
  );

  return (
    <Box
      sx={[
        {
          gap: 3,
          display: "flex",
          flexDirection: "column",
          marginTop: "-150px",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderAddress()}
      {renderPhone()}
      {renderEmail()}
      {renderTime()}
    </Box>
  );
}
