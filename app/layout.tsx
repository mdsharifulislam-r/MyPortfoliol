import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  title: "MD Shariful Islam",
  description: "I am a MERN stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={` antialiased overflow-x-hidden sceme`}
      >
        {children}
      </body>
    </html>
  );
}
