import Link from "next/link";
import { IconTail } from "../svgs/icon-tail";
import { LogoBrand } from "../svgs/logo-brand";

export function Navbar() {
  return (
    <header className="h-24 border-b bg-white border-app-border sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        <Link href="/">
          <LogoBrand />
        </Link>

        <nav className="items-center gap-8 hidden md:flex">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.label} className="text-app-text-nav font-medium">
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="h-12 rounded-full border border-app-blue flex items-center gap-2 px-5 text-app-text font-medium">
          Dashboard
          <IconTail />
        </button>
      </div>
    </header>
  );
}

const menuItems = [
  {
    label: "About Us",
    href: "#!",
  },
  {
    label: "Team",
    href: "#!",
  },
  {
    label: "Solutions",
    href: "#!",
  },
  {
    label: "Blog",
    href: "#!",
  },
];
