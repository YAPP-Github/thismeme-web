import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { QueryClientProvider } from "@/application/queryClient";
import { QueryErrorBoundary } from "@/components/common/ErrorBoundary";
import { Layout } from "@/components/common/Layout";
import { SignUpModal, SignUpModalProvider } from "@/components/common/Modal";
import { ToastContainer, ToastProvider } from "@/components/common/Toast";
import { MazeScript } from "@/infra/sdk";
import type { DefaultPageProps } from "@/types";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  await import("../../mocks");
}

const App = ({ Component, pageProps }: AppProps<DefaultPageProps>) => {
  const router = useRouter();

  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false;
      return true;
    });
  }, [router]);

  return (
    <>
      <MazeScript />
      <Head>
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=yes"
          name="viewport"
        />
      </Head>
      <QueryClientProvider hydrateState={pageProps.hydrateState}>
        <ToastProvider>
          <SignUpModalProvider>
            <Layout>
              <QueryErrorBoundary>
                <ToastContainer />
                <SignUpModal />
                <Component {...pageProps} />
              </QueryErrorBoundary>
            </Layout>
          </SignUpModalProvider>
        </ToastProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
