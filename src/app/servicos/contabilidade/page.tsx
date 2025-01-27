import { CONFIG } from "src/global-config";

import Contabilidade from "@/sections/_servicos/contabilidade/contabilidade";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema Serviços Consultoria Tributária - ${CONFIG.appName}` };

export default function Page() {
  return <Contabilidade />;
}
