import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (props: any) => {
   const { Component, pageProps } = props;
   return (
      <>
         <Header />
         <main className="min-h-[100vh] flex flex-col bg-background text-white">
               <Component {...pageProps} />
            <Footer />
         </main>
      </>
   );
};

export default Layout;
