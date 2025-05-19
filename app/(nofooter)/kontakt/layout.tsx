import Navbar from "@/app/components/Navbar/Navbar";
import Aurora from "@/ReactBits/Aurora/Aurora";

export default function NoFooterLayout({
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
      </div>
    </div>
  );
}
