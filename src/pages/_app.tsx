import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@/components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="light"
      attribute="class"
      enableSystem={false}
      disableTransitionOnChange
    >
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
