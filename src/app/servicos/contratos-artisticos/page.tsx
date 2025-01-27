import { CONFIG } from "src/global-config";

import ContratosArtisticos from "@/sections/_servicos/contratos-artisticos/contratos-artisticos";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema Serviços Contratos Artísticos - ${CONFIG.appName}` };

export default function Page() {
  return <ContratosArtisticos />;
}
