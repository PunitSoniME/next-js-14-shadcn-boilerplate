import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { appName } from "@/helpers/client/utils";

import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";

import { ProvidersTreeProvider } from "@/providers/ProvidersTreeProvider";
import "./globals.css";

const Header = dynamic(() => import("@/components/header"));

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: appName,
  description: "Generated by create next app",
  manifest: "/manifest.json",
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/dark-favicon.svg?v=1',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/light-favicon.svg?v=1',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" id="app-id" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ProvidersTreeProvider>
          <div className="flex flex-col gap-1 sm:gap-2">

            <Header />

            <div className='container px-1 md:px-4'>
              {children}
            </div>

            <Toaster richColors />

          </div>
        </ProvidersTreeProvider>
      </body>
    </html>
  );
}
