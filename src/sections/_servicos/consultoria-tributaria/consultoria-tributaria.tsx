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

export default function ConsultoriaTributaria({ sx, ...other }: BoxProps) {
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
              Consultoria Tributária
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
            A Consultoria Tributária analisa em detalhes os dados financeiros e contábeis da empresa
            para conhecer profundamente a realidade do negócio e formular estratégias que permitam
            pagar menos impostos. O levantamento feito durante a consultoria tributária permitirá
            que a empresa tenha uma vida financeira mais saudável e projete um futuro mais próspero.
          </Typography>
          <br />
          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Como funciona a Consultoria Tributária?
            <br />
          </Box>
          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Os especialistas em Consultoria Tributária da Fradema, avaliam se a empresa está no
            regime tributário mais adequado, de acordo com fatores como ramo de atuação, faturamento
            e quantidade de funcionários. Muitas vezes, o reenquadramento em outro regime já reduz
            significativamente a carga de impostos. Com a Consultoria Tributária, ajudamos a empresa
            a economizar e, também, abrimos um caminho para que os recursos disponíveis sejam
            remanejados para fins mais importantes, como o desenvolvimento de produtos e serviços,
            contratação de novos talentos e planos de expansão. A Consultoria Tributária, em resumo,
            permite, sempre dentro da lei, encontrar um caminho para gastar menos em impostos e
            reorganizar as finanças do negócio.
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
