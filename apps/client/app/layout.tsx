import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: "ChatIN",
  description: "A real-time chat application with temporary rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning className={`${jetbrainsMono.variable} font-mono`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <Analytics />
          <div className="flex justify-left text-2xl py-4 mx-4 opacity-80 fixed top-0 left-0 w-full bg-background z-50">- Nishant Raj</div>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
