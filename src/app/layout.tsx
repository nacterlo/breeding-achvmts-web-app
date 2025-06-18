import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Банк данных селекционных достижений",
  description: "Банк данных селекционных достижений Республики Беларусь",
  keywords: "Банк данных, селекционные достижения, ГИВЦ, Минсельхозпрода",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <footer className="text-sm row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            © УП ГИВЦ Минсельхозпрода {new Date().getFullYear()}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
