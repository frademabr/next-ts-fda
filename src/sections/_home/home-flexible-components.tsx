import type { Variants } from "framer-motion";
import type { BoxProps } from "@mui/material/Box";
import type { Theme, SxProps } from "@mui/material/styles";

import { m } from "framer-motion";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";
import Alert from "@mui/material/Alert";

import Tooltip from "@mui/material/Tooltip";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import CircularProgress from "@mui/material/CircularProgress";

import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";

import { _mock } from "src/_mock";

import { Iconify } from "src/components/iconify";
import { varFade, MotionViewport } from "src/components/animate";

// ----------------------------------------------------------------------

const rowStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: { xs: 3, md: 5 },
  justifyContent: "center",
};

const variants: Variants = varFade("inUp", { distance: 24 });

export function HomeFlexibleComponents({ sx, ...other }: BoxProps) {
  const [circularProgress, setCircularProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCircularProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderSummary = () => (
    <>
      <m.div variants={variants}>
        <Typography className="text-blue-600" variant="overline" sx={{ fontSize: "14px" }}>
          As melhores estratégias
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography variant="h1" sx={{ my: 3 }}>
          Serviços Prestados
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Pre-set components are easy to customize and use. We collected most popular elements.
          Menu, sliders, buttons, inputs etc. are all here. Just dive in!
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <button className="p-3 text-white bg-green-600 rounded-lg motion-preset-pulse-sm text-pretty hover:bg-green-700">
          <a
            target="_blank"
            href="https://wa.me/5521970346980?text=Welcome%20to%20Fradema%20Tax Consulting"
            rel="noreferrer"
          >
            <Iconify width={16} icon="logos:whatsapp-icon" /> WhatsApp
          </a>
        </button>
      </m.div>
    </>
  );

  const renderRow1 = () => (
    <>
      {/* <Button
        size="large"
        variant="contained"
        color="primary"
        startIcon={<Iconify icon="eva:plus-outline" />}
      >
        Add to cart
      </Button>

      <Fab variant="extended" color="inherit" aria-label="upload">
        <Iconify width={24} icon="solar:upload-square-outline" />
        Upload
      </Fab>

      <Fab color="info" aria-label="media">
        <Iconify width={22} icon="solar:play-outline" />
      </Fab> */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          typography: "caption",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          size={64}
          thickness={3}
          color="primary"
          variant="determinate"
          aria-label="Progress"
          value={circularProgress}
        />

        <Box
          component="span"
          sx={{ position: "absolute" }}
        >{`${Math.round(circularProgress)}%`}</Box>
      </Box>
      <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Evoluir juntos é a chave para o nosso sucesso! Venha conosco e eleve o potencial do seu
        negócio!
      </Typography>
    </>
  );

  const renderRow2 = () => (
    <>
      {/* <Tooltip title="descrição" placement="top" arrow>
        <Typography variant="h6">
          <Chip
            variant="soft"
            color="primary"
            label="Consultoria Tributária"
            sx={{ padding: "20px", paddingTop: "28px", paddingBottom: "28px", fontSize: "16px" }}
            // onDelete={() => {}}
            avatar={<Avatar alt="Pamela">1</Avatar>}
          />
        </Typography>
      </Tooltip>

      <Tooltip title="descrição" placement="top" arrow>
        <Typography variant="h6">
          <Chip
            variant="soft"
            color="primary"
            label="Contabilidade"
            sx={{
              padding: "20px",
              paddingTop: "28px",
              paddingBottom: "28px",
              fontSize: "16px",
            }}
            // onDelete={() => {}}
            avatar={<Avatar alt="Pamela">2</Avatar>}
          />
        </Typography>
      </Tooltip> */}
    </>
  );

  //   const renderRow3 = () => (
  //     <> <Rating value={rating} onChange={(event, newValue) => setRating(newValue)} /></>
  //    );
  //  }

  const renderRow4 = () => (
    <>
      <div className="mb-10">
        <Tooltip title="Descrição breve aqui do serviço." placement="top" arrow>
          <Alert severity="info" sx={{ width: 1, minWidth: 250, maxWidth: 0.44 }}>
            Consultoria Tributária
          </Alert>
        </Tooltip>
      </div>

      <div className="mb-10">
        <Tooltip title="Descrição breve aqui do serviço." placement="top" arrow>
          <Alert severity="info" sx={{ width: 1, minWidth: 250, maxWidth: 0.44 }}>
            Contabilidade
          </Alert>
        </Tooltip>
      </div>

      <div className="mb-10">
        <Tooltip title="Descrição breve aqui do serviço." placement="top" arrow>
          <Alert severity="info" sx={{ width: 1, minWidth: 250, maxWidth: 0.44 }}>
            Auditoria fiscal e contábil
          </Alert>
        </Tooltip>
      </div>

      <div className="mb-10">
        <Tooltip title="Descrição breve aqui do serviço." placement="top" arrow>
          <Alert severity="info" sx={{ width: 1, minWidth: 250, maxWidth: 0.44 }}>
            Blindagem Patrimonial
          </Alert>
        </Tooltip>
      </div>

      <div className="mb-10">
        <Tooltip title="Descrição breve aqui do serviço." placement="top" arrow>
          <Alert severity="info" sx={{ width: 1, minWidth: 250, maxWidth: 0.44 }}>
            Recuperação de Empresas
          </Alert>
        </Tooltip>
      </div>

      <div className="mb-10">
        <Tooltip title="Descrição breve aqui do serviço." placement="top" arrow>
          <Alert severity="info" sx={{ width: 1, minWidth: 250, maxWidth: 0.44 }}>
            Offshore no Exterior
          </Alert>
        </Tooltip>
      </div>

      <div className="mb-10">
        <Tooltip title="Descrição breve aqui do serviço." placement="top" arrow>
          <Alert severity="info" sx={{ width: 1, minWidth: 250, maxWidth: 0.44 }}>
            Contratos Artísticos
          </Alert>
        </Tooltip>
      </div>

      <div className="mb-10">
        <Tooltip title="Descrição breve aqui do serviço." placement="top" arrow>
          <Alert severity="info" sx={{ width: 1, minWidth: 250, maxWidth: 0.44 }}>
            Marcas e Patentes
          </Alert>
        </Tooltip>
      </div>
    </>
  );

  return (
    <Box
      component="section"
      sx={[{ py: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 5, md: 3 }} sx={{ justifyContent: { md: "space-between" } }}>
          <Grid
            sx={{ pt: { md: 10 }, textAlign: { xs: "center", md: "left" } }}
            size={{ xs: 12, md: 4 }}
          >
            {renderSummary()}
          </Grid>

          <Grid
            component={m.div}
            variants={variants}
            size={{ xs: 12, md: 7 }}
            sx={(theme) => ({
              gap: 5,
              borderRadius: 3,
              display: "flex",
              p: { xs: 3, sm: 5 },
              alignItems: "center",
              flexDirection: "column",
              border: `dashed 1px ${theme.vars.palette.divider}`,
            })}
          >
            <Box sx={rowStyles}> {renderRow1()}</Box>
            {/* <Box sx={rowStyles}> {renderRow2()}</Box> */}
            {/* <Box sx={rowStyles}> {renderRow3()}</Box> */}
            <Box sx={rowStyles}> {renderRow4()}</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
