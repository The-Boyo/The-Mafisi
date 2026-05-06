"use client";

import Link from "next/link";
import { ButtonOpen } from "./buttons/ButtonOpen";
import { ButtonClose } from "./buttons/ButtonClose";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [headerOpen, setHeader] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {});

  return (
    <header
      className={`flex flex-row justify-between bg-red-500 backdrop-blur-lg p-3 pt-6 w-full transition-all ease-out  overflow-hidden ${headerOpen ? "fixed h-screen min-h-75  duration-700" : "sticky h-25 top-0 duration-200"}`}
    >
      <div className="text-4xl" aria-label="icon">
        M
      </div>
      {headerOpen ? (
        <nav className="flex flex-col flex-1 space-x-2 items-center justify-evenly ">
          <Link
            className={`${pathname === "/" ? "activePathname" : ""}`}
            onClick={() => setHeader(false)}
            href={`/`}
          >
            Home
          </Link>
          <Link
            className={`${pathname === "/office" ? "activePathname" : ""}`}
            onClick={() => setHeader(false)}
            href={`/office`}
          >
            Office
          </Link>
          <Link
            className={`${pathname === "/events" ? "activePathname" : ""}`}
            onClick={() => setHeader(false)}
            href={`/events`}
          >
            Events
          </Link>
          <Link
            className={`${pathname === "/squad" ? "activePathname" : ""}`}
            onClick={() => setHeader(false)}
            href={`/squad`}
          >
            Squad
          </Link>
          <Link
            className={`${pathname === "/wadau" ? "activePathname" : ""}`}
            onClick={() => setHeader(false)}
            href={`/wadau`}
          >
            Wadau
          </Link>
          <Link
            className={`${pathname === "/about" ? "activePathname" : ""}`}
            onClick={() => setHeader(false)}
            href={`/about`}
          >
            About
          </Link>
          <Link
            className={`${pathname === "/become-member" ? "activePathname" : ""}`}
            onClick={() => setHeader(false)}
            href={`/become-member`}
          >
            Become a Member
          </Link>
        </nav>
      ) : null}

      {headerOpen ? (
        <ButtonClose setTheHeader={setHeader} />
      ) : (
        <ButtonOpen setTheHeader={setHeader} />
      )}
    </header>
  );
};
