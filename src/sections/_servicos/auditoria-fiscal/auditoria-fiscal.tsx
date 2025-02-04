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

export default function AuditoriaFiscal({ sx, ...other }: BoxProps) {
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
              Auditoria Fiscal e Contábil
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
            A auditoria fiscal e contábil é um serviço indicado para empresários que buscam
            alternativas de gestão financeira para conseguir identificar se as receitas e despesas
            estão adequadas para o tamanho da empresa. Muitas vezes o empreendedor não consegue
            equilibrar as contas da empresa porque o valor da tributação é além do que ele tem
            condições de pagar. É possível reduzir esses valores? Com a auditoria é possível
            verificar as formas de fazer os registros da empresa ficarem no azul. A auditoria
            contábil é indicada para cuidar da saúde financeira da sua empresa, analisando os
            registros contábeis que são obrigatórios para todas as empresas abertas no Brasil. Serão
            nesses registros que a empresa de contabilidade irá verificar as possibilidades de
            readequar os gastos fiscais. Além dos livros de registros, nossos profissionais utilizam
            inspeções internas e fontes externas para poder avaliar a sua empresa, auditando tanto
            fluxo de caixa, quanto o balanço patrimonial da empresa, sempre pensando no objetivo do
            cliente para com este tipo de serviço. Com a auditoria fiscal e contábil é possível
            descobrir a real situação financeira do negócio, apresentando ao empreendedor as
            condições necessárias para que ele identifique os problemas e realize as mudanças
            necessárias. Empresas de todos os portes devem passar por esta análise, pois são grandes
            as oportunidades encontradas através da auditoria para equilibrar os ganhos e gastos das
            empresas, sempre trabalhando de forma transparente e apresentando soluções legais,
            dentro das leis brasileiras.
          </Typography>

          <br />
          <Box component="span" sx={{ textAlign: "right", typography: "h4" }}>
            O que a Auditoria Fiscal e Contábil analisa?
            <br />
          </Box>
          <br />

          <Typography sx={{ mt: 3, mb: 5, opacity: 0.64 }}>
            Entre as várias informações que a auditoria fiscal e contábil analisa para dar um feed
            back ao empresário que contratou o serviço podemos citar:
            <ul className="font-bold">
              <li>Os bens, direitos e obrigações da empresa;</li>
              <li>
                Possível improbidade, incapacidade administrativa, negligência ou ineficiência;
              </li>
              <li>Obrigações fiscais não cumpridas; Multas e penalidades aplicadas;</li>
              <li>
                Fraudes administrativas ou gastos excessivos; Aplicação de recursos em fins sociais,
                ambientais e outros.
              </li>
            </ul>
            São várias as áreas que podem ser analisadas e o empresário poderá visualizar de forma
            clara a realidade fiscal e contábil de sua empresa, podendo se proteger desses possíveis
            problemas. Interessados em contratar a auditoria fiscal e contábil podem fazer sempre
            que tiver buscando encontrar medidas para recuperar a situação financeira da empresa, ou
            quando identificar a necessidade de fazer controles internos. Com o resultado da
            auditoria, os processos de contabilidade ficarão mais seguros, pois terão um norte para
            seguir com o objetivo de manter dentro da legalidade todas as áreas da empresa,
            corrigindo os registros, se for necessário, ou tomando outras medidas. Consulte nosso
            atendimento e saiba mais sobre o serviço de auditoria fiscal e contábil.
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
