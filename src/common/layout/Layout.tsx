import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (props: any) => {
   const { Component, pageProps } = props;
   return (
      <div className="w-screen overflow-hidden">
         <Header />
         <main className="screenHeight bg-bg text-white p-3 text-center md:p-6">
            <Component {...pageProps} />
         </main>
         <Footer />
      </div>
   );
};

export default Layout;
