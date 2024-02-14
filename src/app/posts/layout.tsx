import { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Posts",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-200">
      <Navbar />
      {children}
    </div>
  );
}
