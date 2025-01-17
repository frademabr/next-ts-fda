import { CONFIG } from "src/global-config";

import { ElearningContactView } from "@/sections/_servicos/view/elearning-contact-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Contact us | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return <ElearningContactView />;
}
