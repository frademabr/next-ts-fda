"use client";

import type { BoxProps } from "@mui/material/Box";

import { m } from "framer-motion";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import { CONFIG } from "src/global-config";
import { Divider } from "@/components/catalyst-ui-kit/typescript/divider";

// ----------------------------------------------------------------------

export default function ContratosArtisticos({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          overflow: "hidden",
          position: "relative",
          bgcolor: "common.black",
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          my: "auto",
          width: 760,
          height: 760,
          opacity: 0.24,
          position: "absolute",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          component={m.img}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          alt="Texture"
          loading="lazy"
          src={`${CONFIG.assetsDir}/assets/background/texture-3.webp`}
        />
      </Box>

      <Container>
        <Box sx={{ mx: "auto", maxWidth: 700, textAlign: "center", color: "common.white" }}>
          <Box sx={{ gap: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box component="span" sx={{ textAlign: "right", typography: "h2" }}>
              Contratos Artísticos
              <br />
            </Box>

            {/* <Box
              component="span"
              sx={(theme) => ({
                ...theme.mixins.textGradient(
                  `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                ),
                typography: "h1",
              })}
            >
              20%
            </Box> */}
          </Box>

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Atuamos conforme seus interesses legítimos, suas expectativas e direitos, evitando
            prejuízos e gerando receitas. Analisamos a relação obrigacional a fim de elaborar um
            contrato apropriado ao caso específico bem como renegociamos contratos existentes a fim
            de solucionar impasses e resolver desequilíbrios entre contratantes. Destacamos nosso
            cuidado em obter o melhor resultado possível no negócio, trazendo uma arrecadação justa
            relativa à clearances da obra e zelando pelo uso lícito da obra. Por fim, avaliamos a
            possibilidade de encerramento do contrato sob o âmbito do equilíbrio contratual e da
            inadimplência das cláusulas contratuais.
          </Typography>

          <br />
          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Nossos serviços incluem:
            <br />
          </Box>
          <br />

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            <ul className="font-bold">
              <li>
                Consultoria e assessoria de propriedade intelectual (INPI e Direitos Autorais);
              </li>
              <li>
                Liberação de direitos autorais e direitos conexos (compositores, artistas e
                músicos);
              </li>
              <li>
                Aconselhamento estratégico relativo ao licenciamento e fornecimento de informações e
                conteúdos digitais em geral;
              </li>
              <li>Consultoria e assessoria da Lei Geral de Proteção de Dados;</li>
              <li>Programas antipirataria, entre outros.</li>
            </ul>
          </Typography>
          {/* <ul role="list" className="">
            <div className="flex items-center font-bold divide-x divide-white opacity-75 gap-x-3 ">
              <li className="py-4 hover:text-blue-700 hover:underline">
                <a href="#">Proteção Patrimonial</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a href="#">Sucessão Patrimonial</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a href="#">Holding Patrimonial</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a className="ml-2" href="#">
                  Planejamento Sucessório
                </a>
              </li>
            </div>
          </ul> */}

          {/* <InputBase
            fullWidth
            placeholder="Enter your email"
            endAdornment={
              <InputAdornment position="end">
                <Button color="primary" size="large" variant="contained">
                  Register
                </Button>
              </InputAdornment>
            }
            inputProps={{ id: "email-input" }}
            sx={{ pr: 0.5, pl: 1.5, height: 56, borderRadius: 1, bgcolor: "common.white" }}
          /> */}
        </Box>
      </Container>
    </Box>
  );
}
