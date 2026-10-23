import type { Metadata } from "next";
import { Dancing_Script, Jost, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { Intro } from "@/components/motion/Intro";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const orangeAvenue = localFont({
  src: "../../public/font/OrangeAvenueDEMO-Regular.otf",
  variable: "--font-orange-avenue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evermore Events by Duvi",
  description:
    "Thoughtfully planned, meaningfully remembered. Wedding and event planning by Evermore Events.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dancingScript.variable} ${jost.variable} ${orangeAvenue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Intro />
        {children}
      </body>
    </html>
  );
}
