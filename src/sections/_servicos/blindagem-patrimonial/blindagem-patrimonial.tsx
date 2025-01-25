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

export default function BlindagemPatrimonial({ sx, ...other }: BoxProps) {
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
              Blindagem patrimonial
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
            A Blindagem Patrimonial é um planejamento tributário e jurídico dos seus bens que tem
            como objetivo protegê-los por meio de uma pessoa jurídica através da constituição de uma
            sociedade. Essa alternativa é ideal para quem não deseja se sujeitar às diversas
            intempéries que a legislação brasileira pode gerar, afetando o valor econômico de bens e
            direitos diante da instabilidade econômica e outras situações. comuns entre pessoas
            físicas. Entre as sociedades que podem ser formadas para a proteção desse patrimônio
            está a holding familiar, onde os bens e direitos serão destacados das pessoas
            interessadas e passarão a compor um patrimônio único, com regras bem definidas. Nós,
            como empresa de contabilidade, podemos te orientar sobre este serviço e todas as opções
            que a lei brasileira permite para a blindagem de patrimônios, inclusive podemos realizar
            os contratos com todas as cláusulas que venham a proteger seus bens. Outra alternativa
            que podemos usar como exemplo para blindar seus bens é utilizar trusts no exterior, que
            conferem uma proteção ainda maior ao seu patrimônio. Agimos sempre dentro da lei e este
            tipo de ação não é ilegal, pelo contrário, é possível conseguir imunidade tributária em
            sociedades baseadas em paraísos fiscais.
          </Typography>

          <br />
          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Serviços Tributários
            <br />
          </Box>
          <br />
          <ul role="list" className="">
            <div className="flex items-center font-bold divide-x divide-white opacity-75 gap-x-3 ">
              <li className="py-4 hover:text-blue-700 hover:underline">
                <a href="#">Parcelamento de dívida ativa</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a href="#">Parcelamento de passivo tributário</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a href="#">Administração do passivo tributário</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a className="ml-2" href="#">
                  Auto de infração fiscal
                </a>
              </li>
            </div>
          </ul>

          <ul role="list" className="">
            <div className="flex items-center font-bold divide-x divide-white opacity-75 gap-x-3 ">
              <li className="py-4 hover:text-blue-700 hover:underline">
                <a href="#">CND Certidão negativa de débito</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a href="#">Debêntures como garantia</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a href="#">Defesa de execução fiscal</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a className="" href="#">
                  Integralização capital social
                </a>
              </li>
            </div>
          </ul>

          <ul role="list" className="">
            <div className="flex items-center font-bold divide-x divide-white opacity-75 gap-x-3 ">
              <li className="py-4 hover:text-blue-700 hover:underline">
                <a href="#">Paex parcelamento excepcional</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a href="#">Planejamento tributário</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a href="#">Refis parcelamento de débito tributário</a>
              </li>
              <li className="hover:text-blue-700 hover:underline">
                <a className="ml-2" href="#">
                  Repatriação de ativos
                </a>
              </li>
            </div>
          </ul>

          <ul role="list" className="">
            <div className="flex items-center font-bold divide-x divide-white opacity-75 gap-x-3 ">
              <li className="justify-center py-4 align-middle hover:text-blue-700 hover:underline">
                <a href="#">Substituição tributária</a>
              </li>
              <Divider className="opacity-85" soft />
            </div>
          </ul>

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
