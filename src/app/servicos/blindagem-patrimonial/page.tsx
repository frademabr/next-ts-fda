import { CONFIG } from "src/global-config";

import BlindagemPatrimonial from "@/sections/_subservicos/blindagem-patrimonial/blindagem-patrimonial";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema Serviços Blindagem Patrimonial - ${CONFIG.appName}` };

export default function Page() {
  return <BlindagemPatrimonial />;
}
