import React from "react";
import '@/app/globals.css'

import {Inter} from 'next/font/google'
import {NextFont} from "next/dist/compiled/@next/font";

const inter:NextFont = Inter({subsets:['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
