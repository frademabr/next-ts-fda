import { CONFIG } from "src/global-config";

import AuditoriaFiscal from "@/sections/_servicos/auditoria-fiscal/auditoria-fiscal";

// ----------------------------------------------------------------------

export const metadata = {
  title: `Fradema Serviços Auditoria Fiscal e Contábil - ${CONFIG.appName}`,
};

export default function Page() {
  return <AuditoriaFiscal />;
}
