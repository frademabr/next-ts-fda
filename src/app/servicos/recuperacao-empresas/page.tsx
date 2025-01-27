import { CONFIG } from "src/global-config";

import RecuperacaoEmpresas from "@/sections/_servicos/recuperacao-empresas/recuperacao-empresas";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema Serviços Recuperação de Empresas - ${CONFIG.appName}` };

export default function Page() {
  return <RecuperacaoEmpresas />;
}
