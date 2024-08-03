import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-screen">
      <main className="max-w-6xl flex-1 mx-auto py-4">{children}</main>
    </div>
  );
};

export default Layout;
