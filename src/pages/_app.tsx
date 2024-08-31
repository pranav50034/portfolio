import "@/styles/globals.css";
import { Inter } from "next/font/google";

import type { AppProps } from "next/app";
import Layout from "@/common/layout/Layout";
import clsx from "clsx";

const inter = Inter({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-inter",
   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <main
            className={clsx(
               "screen-width overflow-hidden",
               `${inter.className}`
            )}
         >
            <Layout pageProps={{ ...pageProps }} Component={Component} />
         </main>
      </>
   );
}
