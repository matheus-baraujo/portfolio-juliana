import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/others/navbar";
import Footer from "@/components/others/footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soul Juliana",
  description: "Vídeomaker mobile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <Navbar footer={false}/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
