import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Ticketed Web",
  description: "This is a website which offers the service of website creation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
