import Navbar from "@/components/layout/Navbar";
import QueryProvider from "@/components/providers/QueryProvider";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import QuickView from "@/components/home/QuickView";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Navbar />
          {children}
          <QuickView />
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}