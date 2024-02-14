import Aside from "@/components/Aside";
import "./globals.css";
import Navbars from "@/components/Navbars";
import Bottombar from "@/components/Bottombar";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="flex flex-col bg-page h-screen max-h-screen">
        <Navbars />
        {/* <Aside /> */}
        <main className="flex-grow overflow-y-auto   text-default-text">
          {children}
          </main>
        <Bottombar />
      </body>
    </html>
     </ClerkProvider>
  );
}
