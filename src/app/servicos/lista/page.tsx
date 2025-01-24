import Lista from "@/sections/_servicos/lista/lista";
import { CONFIG } from "src/global-config";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema Serviços - ${CONFIG.appName}` };

export default function Page() {
  return <Lista />;
}
