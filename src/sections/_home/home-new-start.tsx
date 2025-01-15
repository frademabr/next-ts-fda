import type { Variants } from "framer-motion";
import type { BoxProps } from "@mui/material/Box";

import { m } from "framer-motion";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { CONFIG } from "src/global-config";

import { varFade, MotionViewport } from "src/components/animate";

// ----------------------------------------------------------------------

const variants: Variants = varFade("inUp", { distance: 24 });

export function HomeNewStart({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[{ pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            px: 3,
            gap: 3,
            pb: 10,
            display: "flex",
            borderRadius: 3,
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
            bgcolor: "background.neutral",
          }}
        >
          <m.div variants={variants}>
            <Box
              component="img"
              loading="lazy"
              alt="Cover"
              src={`${CONFIG.assetsDir}/assets/images/home/desktop-mouse-keyboard.webp`}
              sx={{ width: 720 }}
            />
          </m.div>

          <m.div variants={variants}>
            <Typography variant="overline" sx={{ color: "text.disabled" }}>
              Soluções inteligentes e inovadoras voltadas para seu negócio
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography variant="h2">
              Sobre
              <Box
                component="span"
                sx={(theme) => ({
                  ...theme.mixins.textGradient(
                    `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                  ),
                })}
              >
                {` A EMPRESA `}
              </Box>
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography sx={{ color: "text.secondary", maxWidth: 700 }}>
              A Fradema Consultores Tributários está há <strong>36 anos no mercado</strong>,
              possuindo vasta <strong>experiência e qualificação</strong> para pensar nas{" "}
              <strong>melhores soluções</strong> em <strong>consultoria tributária</strong> para o
              seu negócio. Com atuação <strong>desde 1988</strong>, a{" "}
              <strong>Fradema Consultores Tributários </strong>
              possui{" "}
              <strong>
                forte atuação em estratégias empresariais e procedimento administrativos
              </strong>{" "}
              nas esferas federal, estadual e municipal, com{" "}
              <strong>filiais em todo o território nacional.</strong>
              Nossos escritórios estão localizados no{" "}
              <strong>
                Distrito Federal, Bahia, Pernambuco, Espírito Santo, Minas Gerais, Rio de Janeiro,
                Santa Catarina, São Paulo, Paraná e Amazonas
              </strong>
              .
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
