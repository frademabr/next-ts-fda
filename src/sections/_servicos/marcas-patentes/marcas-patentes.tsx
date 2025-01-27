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

export default function MarcasPatentes({ sx, ...other }: BoxProps) {
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
              Marcas e Patentes
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
          <Typography sx={{ mb: 5, mt: 5, typography: "h4" }}>Serviços para Marcas</Typography>

          <Typography sx={{ justifyContent: "center", mt: 3, mb: 5, opacity: 0.64 }}>
            <ul>
              <li>
                Assessoramento qualificado e antenado aos desafios apresentados por um mercado
                globalizado;
              </li>
              <li>Mecanismo Antitruste relacionado à marca no mercado de concorrência;</li>
              <li>Pesquisa da marca no INPI;</li>
              <li>
                Registro da marca no INPI; Resguardo da imagem e da Marca no mercado de negócios.
              </li>
            </ul>{" "}
          </Typography>

          <br />
          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Serviços de Patente
            <br />
          </Box>
          <br />

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            <ul>
              <li>
                Elaboração e depósitos de pedidos de patente em diversas áreas de tecnologias;
              </li>
              <li>
                Busca de patentes, atendimento a consultas sobre patenteabilidade e infrações com
                abrangência nacional;
              </li>
              <li>Preparação e apresentação de subsídios e nulidades administrativas;</li>
              <li>Fiscalização de pedidos de patente ou patentes de terceiros;</li>
              <li>Pagamento das anuidades.</li>
            </ul>
          </Typography>

          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Marcas
            <br />
          </Box>
          <br />
          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            A Marca representa grande parte de ativos de uma empresa, representando a relação entre
            produtos e serviços de determinada entidade. É de extrema importância que uma marca seja
            registrada, evitando inclusive, a concorrência desleal, que ocorre quando o empresário
            utiliza práticas ilícitas para angariar clientela, prejudicando seus concorrentes. Nosso
            trabalho cuida minuciosamente para que nosso cliente não passe por essa situação
            prejudicial, dentre outras que possuímos experiência para resolver da melhor forma
            possível. Temos grande experiência com o registro de marcas no INPI (Instituto Nacional
            de Propriedade Industrial), iniciando pela pesquisa da marca no mercado bem como
            cumprindo as exigências previstas em lei. Desde a microempresa até as maiores do
            mercado, atuamos com a finalidade de ter soluções criativas, objetivas e adequadas as
            suas necessidades. Unimos tradição, inovação, experiência e visão contemporânea para
            solucionar cada caso, alcançando assim, resultados satisfatórios e resguardando sua
            marca no negócio e na concorrência desleal.
          </Typography>

          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Patentes
            <br />
          </Box>
          <br />

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Nosso trabalho com as patentes visa resguardar as ideias e invenções, registrando sua
            criação, a fim que seja preservado todos os seus direitos. Ainda que a sua ideia não for
            totalmente original, mas trouxer uma forma original de melhorar algum produto ou
            procedimento já existente no mercado, também poderemos obter a patente sobre ela.
            Desenvolvemos todos os serviços necessários para a proteção e comercialização de
            patentes e modelos de utilidade. Nossas atividades são desempenhadas por uma equipe
            preparada e experiente. Contamos ainda com uma abrangência de nossos serviços em todo o
            território nacional.
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
