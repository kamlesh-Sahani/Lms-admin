import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full h-screen">
          <Sidebar />
          <main className="max-w-6xl flex-1 mx-auto py-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
