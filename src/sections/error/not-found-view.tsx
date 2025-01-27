"use client";

import { m } from "framer-motion";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { RouterLink } from "src/routes/components";

import { CONFIG } from "src/global-config";
import { SimpleLayout } from "src/layouts/simple";

import { varBounce, MotionContainer } from "src/components/animate";

// ----------------------------------------------------------------------

export function NotFoundView() {
  return (
    <SimpleLayout slotProps={{ content: { compact: true } }}>
      <MotionContainer>
        <m.div variants={varBounce("in")}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Página não encontrada!
          </Typography>
        </m.div>

        <m.div variants={varBounce("in")}>
          <Typography sx={{ color: "text.secondary" }}>
            Desculpe, não encontramos a página solicitada. Reveja o url por favor.
          </Typography>
        </m.div>

        <m.div variants={varBounce("in")}>
          <Box
            component="img"
            alt="Page not found!"
            src={`${CONFIG.assetsDir}/assets/illustrations/illustration-404.svg`}
            sx={{ mx: "auto", width: 320, maxWidth: 1, height: "auto", my: { xs: 5, sm: 10 } }}
          />
        </m.div>

        <Button component={RouterLink} href="/" size="large" color="inherit" variant="contained">
          Voltar para Home
        </Button>
      </MotionContainer>
    </SimpleLayout>
  );
}
