import { CONFIG } from "src/global-config";

import { MarketingLandingView } from "@/sections/_filiais/view/marketing-landing-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Filiais Fradema - ${CONFIG.appName}` };

export default function Page() {
  return <MarketingLandingView />;
}
