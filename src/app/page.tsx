import HorizontalScroll from "@/components/HorizontalScroll";
import { Navbar } from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Page() {
  return (
    <main className="overflow-hidden">
      {/* <Navbar /> */}
      <ThemeSwitcher />
      <HorizontalScroll />
    </main>
  );
}