import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "created by Shahid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute='class' defaultTheme="light" enableSystem={true} storageKey="dashboard-theme">
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
