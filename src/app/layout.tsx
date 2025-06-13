import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/ui/header";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
          <Header />
          <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            {children}
          </main>
          <footer className="text-sm row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            © УП ГИВЦ Минсельхозпрода {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
