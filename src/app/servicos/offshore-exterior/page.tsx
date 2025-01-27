import { CONFIG } from "src/global-config";

import OffshoreExterior from "@/sections/_servicos/offshore-exterior/offshore-exterior";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema Serviços Offshore no Exterior - ${CONFIG.appName}` };

export default function Page() {
  return <OffshoreExterior />;
}
