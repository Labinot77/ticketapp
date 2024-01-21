import "./globals.css";
import Navbars from "@/components/Navbars";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen max-h-screen">
        <Navbars />
        <main className="flex-grow overflow-y-auto bg-page text-default-text">{children}</main>
      </body>
    </html>
  );
}
