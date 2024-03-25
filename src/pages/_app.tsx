import { Inter } from "next/font/google";
import "@/styles/globals.css"

import type { AppProps } from "next/app";
import Layout from "@/common/layout/Layout";

const inter = Inter({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-inter",
   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <main className={`${inter.className} scroll-smooth`}>
            <Layout pageProps={{ ...pageProps }} Component={Component} />
         </main>
      </>
   );
}
