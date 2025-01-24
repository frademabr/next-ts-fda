import { CONFIG } from "src/global-config";

import ConsultoriaTributaria from "@/sections/_subservicos/consultoria-tributaria/consultoria-tributaria";

// ----------------------------------------------------------------------

export const metadata = { title: `Fradema Serviços Consultoria Tributária - ${CONFIG.appName}` };

export default function Page() {
  return <ConsultoriaTributaria />;
}
