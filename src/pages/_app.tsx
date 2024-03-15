import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

import { ThemeProvider } from "@/components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider
        defaultTheme="light"
        attribute="class"
        enableSystem={false}
        disableTransitionOnChange
      >
        <Component {...pageProps} />;
      </ThemeProvider>
    </Provider>
  );
}
