import { CONFIG } from "src/global-config";

import { ElearningAboutView } from "@/sections/_servicos/view/elearning-about-view";

// ----------------------------------------------------------------------

export const metadata = { title: `About us | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return <ElearningAboutView />;
}
