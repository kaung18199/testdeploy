"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item, isScrolled }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`px-3 ${
        isScrolled ? "text-gray-900" : "text-white"
      } py-1  hover:border-red-600  transition duration-150 ${
        pathName == item.path &&
        ` ${
          isScrolled ? "border-b-2 border-red-600" : "border-b-2 border-white"
        } `
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
