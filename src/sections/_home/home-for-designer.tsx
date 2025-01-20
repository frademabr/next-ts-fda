import type { Variants } from "framer-motion";
import type { BoxProps } from "@mui/material/Box";

import { m } from "framer-motion";
import { varAlpha } from "minimal-shared/utils";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";

import { CONFIG } from "src/global-config";

// ----------------------------------------------------------------------

export function HomeForDesigner({ sx, ...other }: BoxProps) {
  return (
    <div className="mx-auto mt-32 max-w-7xl sm:mt-30 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-14 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Conheça nossos parceiros
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-300">
          Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident
          cillum in nisi adipisicing officia excepteur tempor deserunt.
        </p>
        <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-4">
          <img
            alt="Banesco"
            src="https://upload.wikimedia.org/wikipedia/commons/7/74/Banesco_logo.svg"
            width={158}
            height={48}
            className="bg-white rounded-xl p-2 col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Bank of America Merrill Lynch"
            src="https://cdn.brandfetch.io/idmkg0fDw6/w/400/h/400/theme/dark/icon.png?c=1bfwsmEH20zzEfSNTed"
            width={158}
            height={48}
            className="rounded-md col-span-2 max-h-24 w-full object-contain lg:col-span-1"
          />
          <img
            alt="BB Americas Bank"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Banco_do_Brasil_Americas_logo.svg"
            width={158}
            height={48}
            className="rounded-sm col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://static.cdnlogo.com/logos/u/38/ubs-svg.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          {/* <img
            alt="Statamic"
            src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          /> */}
        </div>
        <div aria-hidden="true" className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
