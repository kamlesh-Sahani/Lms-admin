import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
<<<<<<< HEAD
    <div className="flex w-full h-screen">
      <main className="max-w-6xl flex-1 mx-auto py-4">{children}</main>
=======
    // <div className="flex w-full h-screen">
    //   <main className="max-w-6xl flex-1 mx-auto py-4">{children}</main>
    // </div>

    <div className="flex w-full  justify-between bg-green-300">
      <Sidebar />
      <main className="max-w-6xl flex-1 mx-auto py-4 h-screen overflow-y-auto">{children}</main>
>>>>>>> origin/main
    </div>
  );
};

export default Layout;
