import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Ribbon from "../components/Ribbon";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-main' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-heading' });

export const metadata = {
  title: "Alvas Pragati – Connecting Talent with Opportunity",
  description: "Placement drive and job fair by Alvas Pragati",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-main text-text-main bg-slate-100 overflow-x-hidden leading-relaxed`}>
        <div className="mesh-bg"></div>
        <Ribbon />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
