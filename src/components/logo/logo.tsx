import type { LinkProps } from "@mui/material/Link";

import { forwardRef, lazy } from "react";
import { mergeClasses } from "minimal-shared/utils";

import Link from "@mui/material/Link";
import { styled, useTheme } from "@mui/material/styles";

import { RouterLink } from "src/routes/components";

import { logoClasses } from "./classes";
import { CONFIG } from "src/global-config";
import Image from "next/image";

import whiteLogo from "public/assets/images/home/logo-fradema-branco.png";

import shortLogo from "public/assets/images/home/logo-fradema-single.png";

// ----------------------------------------------------------------------

export type LogoProps = LinkProps & {
  isSingle?: boolean;
  disabled?: boolean;
};

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>((props, ref) => {
  const { className, href = "/", isSingle = false, disabled, sx, ...other } = props;

  const theme = useTheme();

  const singleLogo = <Image src={shortLogo} alt="short_logo" loading="lazy" />;

  const fullLogo = (
    <Image
      className="sm:flex sm:justify-end sm:ml-20"
      src={whiteLogo}
      alt="white_logo"
      loading="lazy"
    />
  );

  return (
    <LogoRoot
      ref={ref}
      component={RouterLink}
      href={href}
      aria-label="Logo"
      underline="none"
      className={mergeClasses([logoClasses.root, className])}
      sx={[
        () => ({
          width: 64,
          height: 64,
          ...(!isSingle && { width: 420, height: 180, marginLeft: -15 }),
          ...(disabled && { pointerEvents: "none" }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isSingle ? singleLogo : fullLogo}
    </LogoRoot>
  );
});

// ----------------------------------------------------------------------

const LogoRoot = styled(Link)(() => ({
  flexShrink: 0,
  color: "inherit",
  display: "inline-flex",
  verticalAlign: "middle",
}));
