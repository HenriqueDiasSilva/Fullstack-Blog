import { AppContent } from "@/components";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fullstack Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppContent session={session}>{children}</AppContent>
      </body>
    </html>
  );
}

