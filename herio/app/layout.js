import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-black">
      {/* <Navbar/> */}
      <body className={inter.className}>{children}</body>
      {/* <Footer/> */}
    </html>
  );
}
