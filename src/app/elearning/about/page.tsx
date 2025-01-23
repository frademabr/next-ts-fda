import { CONFIG } from "src/global-config";

import { ElearningAboutView } from "@/sections/_elearning/view/elearning-about-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema elearning - ${CONFIG.appName}` };

export default function Page() {
  return <ElearningAboutView />;
}
