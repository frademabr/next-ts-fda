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
              Offshore no Exterior
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
            A constituição de empresa offshore vem ganhando grande destaque no mundo empresarial,
            seja para questões de planejamento tributário, sucessório ou até mesmo para proteção
            patrimonial. A grande vantagem na constituição de uma empresa offhore é a preservação da
            identidade dos sócios, prezando pelo sigilo das operações, inclusive podendo aproveitar
            os benefícios tributários que são oferecidos em determinados países, o que deverá ser
            analisado caso a caso de acordo com a necessidade de cada cliente. O interesse mais
            comum na constituição de uma empresa offshore em paraísos fiscais é a possibilidade de
            contar com uma baixa carga tributária ou até mesmo com uma isenção fiscal, razão pela
            qual os territórios onde estão localizadas as empresas offshore são considerados
            paraísos fiscais. Porém, a offshore tem tido uma utilização muito mais ampla que apenas
            a questão tributária, podendo ser utilizada em questões de gestão do patrimônio pessoal,
            seja para adquirir e vender patrimônio pessoal, aplicações financeiras e em especial
            para o planejamento sucessório, tendo a possibilidade de transmissão de heranças sem os
            custos e a burocracia de um inventário.
          </Typography>

          <br />
          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            É possível abrir uma empresa offshore em diversos lugares do mundo. Com a assessoria da
            Fradema, você conseguirá:
            <br />
          </Box>
          <br />

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            <ul className="font-bold">
              <li>Abrir uma empresa offshore nas Ilhas Cayman</li>
              <li>Abrir uma empresa offshore em Delaware e Nevada, nos Estados Unidos</li>
              <li>Abrir uma empresa offshore nas Bahamas</li>
              <li>Abrir uma empresa offshore nos Emirados Árabes Unidos;</li>
              <li>Abrir uma empresa offshore nas Ilhas Virgens Britânicas</li>
              <li>Abrir uma empresa offshore em Luxemburgo</li>
              <li>Abrir uma empresa offshore no Panamá</li>
              <li>Abrir uma empresa offshore nas Suíça</li>
              <li>Abrir uma empresa offshore em Mônaco</li>
              <li>Abrir uma empresa offshore no Uruguai</li>
            </ul>
          </Typography>
          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Os destinos acima são os mais usuais, porém não são os únicos. A Fradema Consultores
            Tributários possui experiência e condições para te ajudar a abrir uma empresa offshore
            em 33 países diferentes.
          </Typography>

          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Quais são as vantagens de abrir uma empresa Offshore?
            <br />
          </Box>
          <br />

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Abrir uma empresa offshore é um recurso estratégico para quem deseja blindar seu
            patrimônio. O empreendimento é criado sem a identificação dos sócios. Entre as vantagens
            de abrir uma empresa offshore, estão a proteção dos bens, a baixa carga fiscal, a
            facilidade para abertura de contas bancárias no exterior e a praticidade do serviço.
            Tudo é providenciado pelos consultores da Fradema. Você vai abrir uma empresa offshore
            sem sair de casa, sem precisar viajar e sem perder tempo com burocracia.
          </Typography>

          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            Por quê abrir uma empresa Offshore?
            <br />
          </Box>
          <br />

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Pessoas que não têm como declarar a origem dos recursos optam por abrir uma empresa
            offshore para impedir a identificação do dono da conta bancária. Mas isso não significa
            que a operação de constituição de uma offshore seja ilegal. Pelo contrário, no mundo
            todo há regiões conhecidas como paraísos fiscais e que oferecem estruturas e serviços de
            alto padrão totalmente dentro da lei. O Brasil tem milhares de investidores que optam
            por este modelo e informam seus recursos anualmente em suas declarações de Imposto de
            Renda. Os benefícios de abrir uma empresa offshore vão desde ampliar investimentos até
            facilitar a sucessão patrimonial, passando por ampliar as possibilidades de fazer
            negócios em âmbito internacional. Abrir uma empresa offshore é uma estratégia
            comprovadamente eficaz de multiplicar recursos conquistados de forma legítima.
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
