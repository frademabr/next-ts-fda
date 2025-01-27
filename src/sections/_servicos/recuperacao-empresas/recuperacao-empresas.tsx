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

export default function RecuperacaoEmpresas({ sx, ...other }: BoxProps) {
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
              Recuperação de Empresas
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
            Empresas em situação de <strong>crise econômica e financeira</strong> com muitas dívidas
            podem solicitar o plano de recuperação judicial que oferece à empresas meios de se
            recuperarem em um futuro próximo. O documento elaborado por uma equipe de especialistas
            vai traçar todas as medidas que serão adotadas pela empresa devedora visando a
            recuperação da mesma. Para a preparação do plano de recuperação judicial, é necessário
            fazer uma análise muito precisa da situação financeira da empresa devedora, encontrando
            todas as dificuldades existentes. Com base no que foi apurado, começa então a construção
            de uma solução para o pagamento das dívidas, trabalhando também com as possibilidades de
            remissão e/ou a dilação dos valores devidos. O trabalho é feito com base em leis
            nacionais e, em alguns casos, é possível fazer negociações extrajudiciais, o que é muito
            vantajoso para o empresário que busca reerguer sua empresa. O plano de recuperação
            judicial mostrará quais serão as medidas a serem tomadas para superar a dificuldade
            financeira e econômica que ela está enfrentando. Assim, o devedor terá em mãos um
            documento com sua real situação financeira para poder apresentar ao seus credores, que
            irão analisar a situação e então aprovar ou novas condutas de cobrança e negociação.
          </Typography>
          <br />
          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Vantagens da Recuperação de Empresas
            <br />
          </Box>
          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Esse procedimento traz muitas vantagens, principalmente no quesito de manutenção da
            fonte produtora e a manutenção do emprego dos trabalhadores. Todo o processo de análise
            e definição do plano de recuperação judicial deve ser feito por uma empresa com
            especialistas, profissionais de diversas área que farão a análise e a criação do plano a
            ser seguido. Para ter ênfase nesse processo, é necessário receber esse suporte
            profissional e a nós da FRADEMA estamos prontos para te ajudar no desenvolvimento desse
            plano. Nossa empresa tem mais de 30 anos de atuação, formada por consultores tributários
            preparados para te ajudar nesse processo. Trabalhamos para que o cliente obtenha a
            melhor resposta de seus credores, sempre pensando na reestruturação financeira e
            econômica da sua empresa, a fim de impedir a falência. O apoio de uma assessoria
            jurídica é essencial para que você tenha êxito nesse processo, entre em contato conosco
            agora mesmo para iniciarmos o plano de recuperação judicial da sua empresa.
          </Typography>
          <br />
          {/* <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Serviços Tributários
            <br />
          </Box> */}
          {/* <br />
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
