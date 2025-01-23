import { _caseStudies } from "src/_mock";
import { CONFIG } from "src/global-config";

import { MarketingCaseStudiesView } from "@/sections/_filiais/view/marketing-case-studies-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Filiais Fradema - ${CONFIG.appName}` };

export default function Page() {
  return <MarketingCaseStudiesView caseStudies={_caseStudies} />;
}
