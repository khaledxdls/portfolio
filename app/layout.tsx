"use client";
import { Prata } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from "react";

const urls = ['/', '/about', '/projects', '/experience', '/education'];
const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        const currentIndex = urls.indexOf(pathname);
        const nextIndex = (currentIndex + 1) % urls.length;
        router.push(urls[nextIndex]);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [pathname, router]);

  useEffect(() => {
    const scrollToTop = () => {
      if (mainContentRef.current) {
        mainContentRef.current.scrollTo(0, 0);
      }
    };

    // Adding a slight delay to ensure the DOM is fully updated
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${prata.className} antialiased flex flex-col h-screen`}>
        <div className="flex flex-col h-full overflow-hidden">
          <Header />
          <div className="flex-1 px-8 py-12 h-full overflow-y-auto" ref={mainContentRef}>
            <main className="max-w-7xl mx-auto w-full">
              {children}
              <div ref={bottomRef} style={{ height: '1px' }}></div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}