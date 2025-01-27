import { CONFIG } from "src/global-config";

import MarcasPatentes from "@/sections/_servicos/marcas-patentes/marcas-patentes";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema Serviços Marcas e Patentes - ${CONFIG.appName}` };

export default function Page() {
  return <MarcasPatentes />;
}
