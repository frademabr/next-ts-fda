"use client";

import type { ICaseStudyProps } from "src/types/case-study";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { _testimonials, _filiaisPosts } from "src/_mock";

import { MarketingTestimonial } from "../marketing-testimonial";
import { MarketingCaseStudyList } from "../list/marketing-case-study-list";

// ----------------------------------------------------------------------

type Props = {
  caseStudies: ICaseStudyProps[];
};

export function MarketingCaseStudiesView({ caseStudies }: Props) {
  const renderTexts = () => (
    <Box
      sx={{
        py: { xs: 3, md: 5 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Typography variant="h2"> Filiais</Typography>
      <Typography sx={{ mt: 3, color: "text.secondary" }}>
        15 Filiais, 13 no território nacional e 2 no exterior
        <br />
      </Typography>
    </Box>
  );

  return (
    <>
      <Box component="section">
        <Container>
          {renderTexts()}
          <MarketingCaseStudyList caseStudies={caseStudies} />
        </Container>
      </Box>

      <MarketingTestimonial testimonials={_testimonials} />
    </>
  );
}
