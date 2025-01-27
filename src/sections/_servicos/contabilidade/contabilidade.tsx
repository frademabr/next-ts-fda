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

export default function Contabilidade({ sx, ...other }: BoxProps) {
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
              Contabilidade
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
            A contabilidade é responsável pelo controle do movimento financeiro da empresa, ou seja,
            conciliação, geração e pagamento dos tributos. Visa manter o controle das taxas que
            incidem sobre a empresa, dando o direcionamento correto. É fundamental para o processo
            de administração e tem papel fundamental na tomada de decisões. Por meio de registros e
            demonstrações de resultados, ela controla os atos e fatos do patrimônio das
            organizações. As informações e relatórios produzidos pela equipe de Contabilidade ajudam
            o empresário a tomar decisões importantes, que podem ser decisivas para o rumo do
            negócio, além de garantir que ele não tenha problemas com o Fisco.
          </Typography>

          <br />
          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Funções da Contabilidade
            <br />
          </Box>
          <br />

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            <ul className="font-bold">
              <li>
                Registrar tudo o que ocorre em uma empresa e pode ser representado por valores
                monetários;
              </li>
              <li>
                Organizar um sistema de controle desses dados que seja adequado à rotina da empresa;
              </li>
              <li>
                Demonstrar periodicamente a situação econômica, patrimonial e financeira aos
                gestores, com base nos registros realizados;
              </li>
              <li>Analisar demonstrativos para apurar os resultados da empresa;</li>
              <li>
                Acompanhar a execução dos planos econômicos da empresa, prevendo quantias a pagar e
                a receber;
              </li>
              <li>
                Alertar a gestão com antecedência sobre quaisquer problemas que possam acontecer em
                relação ao patrimônio da empresa.
              </li>
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
