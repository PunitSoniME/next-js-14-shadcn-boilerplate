import type { Metadata } from "next";
import { useProvidersTree } from 'react-helper-hooks';
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import DarkModeProvider from "@/providers/DarkModeProvider";
import { Sheet } from "@/components/ui/sheet";
import dynamic from "next/dynamic";
import { TooltipProvider } from "@/components/ui/tooltip";
import { appName } from "@/lib/helpers";

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

const buildProvidersTree = useProvidersTree();
const ProvidersTree = buildProvidersTree([
  [TooltipProvider, { delayDuration: 0 }],
  [DarkModeProvider],
]);

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
        <ProvidersTree>
          <Sheet>
            <div className="flex flex-col gap-2">

              <Header />

              <div className='container px-0 md:px-4'>
                {children}
              </div>

            </div>

          </Sheet>
        </ProvidersTree>
      </body>
    </html>
  );
}
