
import FooterComponent from "@/component/FooterComponent";
import "./globals.css";
import NavbarComponent from "@/component/NavbarComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <NavbarComponent/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
