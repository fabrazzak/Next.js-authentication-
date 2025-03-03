import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session=getServerSession(authOptions)
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar session={session} /> 
        <div className="min-h-screen w-[90%] mx-auto">{children}</div>
      </body>
    </html>
  );
}
