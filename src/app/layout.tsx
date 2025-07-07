import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/ui/theme-provider";
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
  keywords: "Банк данных, селекционные достижения, ГИВЦ, достижения Республики Беларусь",
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
          {/* <div className="min-h-screen flex flex-col mx-auto px-4 py-8 max-w-7xl "> */}
          <div className="min-h-screen flex flex-col mx-auto px-4 py-8 ">
            <Header />
            <main className="flex-1 flex items-center">
              {children}
            </main>
            <footer className="mt-8">
              <p className="text-md text-center text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()}
                <a href="https://www.givc.by/" target="_blank" rel="noopener noreferrer"> УП ГИВЦ &quot;Минсельхозпрода&quot;</a>
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
