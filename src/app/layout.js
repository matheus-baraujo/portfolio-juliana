import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/others/navbar";

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
        <Navbar />

        {children}

      </body>
    </html>
  );
}
