"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import { DM_Sans, Poppins } from "next/font/google";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";
import dynamic from 'next/dynamic'
const SessionProvider = dynamic(() => import('@/context/session'), { ssr: false })


if (typeof window !== "undefined") {
  import("bootstrap");
}

// DM_Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`body  ${poppins.className} ${dmSans.className}`}
        cz-shortcut-listen="false"
      >
        <SessionProvider>
          <div className="wrapper ovh">
            {children}
          </div>
        </SessionProvider>
        <ToastContainer />
        <ScrollToTop />
      </body>
    </html>
  );
}
