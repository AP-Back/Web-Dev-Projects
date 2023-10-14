import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import RootLayout from "@/components/RootLayout";
import { persister, store } from "@/store/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister} loading={null}>
        <SessionProvider session={session}>
          <div className="font-bodyFont bg-gray-300">
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
