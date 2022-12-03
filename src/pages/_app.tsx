import "@/styles/globals.css";

import type { AppProps } from "next/app";
import type { ComponentProps } from "react";

import QueryClientProvider from "@/application/queryClient";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../mocks");
}

interface PageProps {
  hydrateState: ComponentProps<typeof QueryClientProvider>["hydrateState"];
}

function App({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <QueryClientProvider hydrateState={pageProps.hydrateState}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
