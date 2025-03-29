"use client";
import { Apple } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LandingHeader = () => {
  const pathname = usePathname();
  const routes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Smart Bite" },
    { href: "/categories", label: "Bites Categories" },
    { href: "/about", label: "About" },
    // { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="flex justify-between w-full sticky top-0 z-50 bg-transparent ">
      <div className="border p-1.5">
        <Link href="/" className="ml-4 md:ml-0 flex items-center gap-2">
          <Apple className="h-6 w-6" />
          <span className="font-bold text-xl">SmartBite</span>
        </Link>
      </div>
      <nav className="border p-1.5 font-bold flex w-[fix] space-x-4 justify-evenly ">
        {/* smart Bite means the recommendation for the for the student with dietary need  */}

        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`transition-colors hover:text-primary  hover:border-b-4 ${
              pathname === route.href
                ? "text-primary font-medium"
                : "text-muted-foreground"
            }`}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default LandingHeader;
