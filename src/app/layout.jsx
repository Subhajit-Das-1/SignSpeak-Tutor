import './globals.css';
import { cn } from '@/lib/utils';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import SidebarNav from '@/components/layout/SidebarNav';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageWrapper from '@/components/layout/LanguageWrapper';

export const metadata = {
  title: 'SignSpeak Tutor',
  description: 'AI-powered, gamified learning portal for Indian Sign Language.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <LanguageWrapper>
              <SidebarProvider>
                <div className="flex min-h-screen">
                  <SidebarNav />
                  <div className="flex flex-1 flex-col">
                    <Header />
                    <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
                  </div>
                </div>
              </SidebarProvider>
              <Toaster />
            </LanguageWrapper>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
