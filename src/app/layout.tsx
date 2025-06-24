import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/ui/theme-provider";
import { ModeToggle } from "@/shared/ui/theme-toogle";
import { Separator } from "@/shared/ui/kit/separator";

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
          <div className="min-h-screen flex flex-col mx-auto px-4 py-8 max-w-7xl bg-white dark:bg-[#121212] text-gray-900 dark:text-white">
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Реестр селекционных достижений Республики Беларусь</h1>
              <ModeToggle />
            </header>
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
          {/* <main className="min-h-screen  bg-white dark:bg-[#121212] text-gray-900 dark:text-white">
            <div className="min-h-screen flex flex-col mx-auto px-4 py-8 max-w-7xl">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Селекционные достижения</h1>
                <ModeToggle />
              </div>
              {children}
            </div>
          </main>
          <footer className="mt-8">
            <p className="text-md text-center text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} УП ГИВЦ &quot;Минсельхозпрода&quot;
            </p>
          </footer> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
