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
            gap: 0,
            pb: 15,
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
              src={`${CONFIG.assetsDir}/assets/images/home/Notebooks.png`}
              sx={{ width: 720 }}
            />
          </m.div>

          <m.div className="mb-5" variants={variants}>
            <Typography className="text-green-500" variant="overline">
              Soluções inteligentes e inovadoras voltadas para seu negócio
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography variant="h2">
              Sobre
              <Box component="span">{` A EMPRESA `}</Box>
            </Typography>
          </m.div>

          <m.div className="mt-5" variants={variants}>
            <Typography className="opacity-100" sx={{ color: "text.secondary", maxWidth: 700 }}>
              A Fradema Consultores Tributários está há{" "}
              <strong className="text-white opacity-75">36 anos no mercado</strong>, possuindo vasta{" "}
              <strong className="text-white opacity-75">experiência e qualificação</strong> para
              pensar nas <strong className="text-white opacity-75">melhores soluções</strong> em{" "}
              <strong className="text-white opacity-75">consultoria tributária</strong> para o seu
              negócio. Com atuação <strong className="text-white opacity-75">desde 1988</strong>, a{" "}
              <strong className="text-white opacity-75">Fradema Consultores Tributários </strong>
              possui forte atuação em{" "}
              <strong className="text-white opacity-75">
                estratégias empresariais e procedimento administrativos
              </strong>{" "}
              nas esferas federal, estadual e municipal, com filiais em todo o território nacional.
              Nossos escritórios estão localizados no{" "}
              <strong className="text-white opacity-75">
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
