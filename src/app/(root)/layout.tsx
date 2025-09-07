import type { Metadata } from "next";
import { SidebarDemo } from "./_components/SIdebar";
import { Navbar } from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "OpenSource Issue Tracker",
  description:
    "Find and Filter OpenSourceIssues and Organizations Based on Your Tech Stack, All in One Place!",
};

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      
        <div className="dark h-[100vh]">
          <Navbar />
          <div className="flex h-full ">
          <SidebarDemo/>
          {children}
          </div>
          
        </div>
      
    </>
  );
}