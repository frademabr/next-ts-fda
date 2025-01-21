import { CONFIG } from "src/global-config";

import { ElearningLandingView } from "@/sections/_servicos/view/elearning-landing-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Home | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return <ElearningLandingView />;
}
