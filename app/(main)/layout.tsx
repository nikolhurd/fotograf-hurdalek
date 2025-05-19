import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import "../../app/globals.css";
import Aurora from "@/ReactBits/Aurora/Aurora";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen">
      <Aurora isDesktopOnly={false} speed={1} />{" "}
      <div className="relative z-10 flex flex-col min-h-screen">
        {" "}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
