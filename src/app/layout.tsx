import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import LenisProvider from "@/components/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-primeform`}>
        <Navbar light={false} />
        <LenisProvider>
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
