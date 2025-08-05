"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Use React.PropsWithChildren and pass rest as props
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
