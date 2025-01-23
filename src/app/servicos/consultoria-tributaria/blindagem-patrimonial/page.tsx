import { CONFIG } from "src/global-config";

import BlindagemPatrimonial from "@/sections/_servicos/blindagem-patrimonial/blindagem-patrimonial";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema Serviços Consultoria Tributária - ${CONFIG.appName}` };

export default function Page() {
  return <BlindagemPatrimonial />;
}
