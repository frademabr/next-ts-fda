import { CONFIG } from "src/global-config";

import { ElearningPostView } from "@/sections/_elearning/view/elearning-post-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Post details | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return <ElearningPostView />;
}
