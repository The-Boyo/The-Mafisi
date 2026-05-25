"use client";

import Link from "next/link";
import { ButtonOpen } from "./buttons/ButtonOpen";
import { ButtonClose } from "./buttons/ButtonClose";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [headerOpen, setHeader] = useState<boolean>(true);
  const pathname = usePathname();

  const [screenSize, setScreenSize] = useState(0);

  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        const width = headerRef.current.getBoundingClientRect().width;
        setScreenSize(width);
        if (width < 640) {
          setHeader(false);
        } else {
          setHeader(true);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (screenSize < 640) setHeader(false);

    return;
  };

  return (
    <header
      className={`flex flex-row justify-between bg-red-900/80 backdrop-blur-lg p-3 pt-6 w-full transition-all ease-out ${headerOpen ? "fixed inset-0 h-screen min-h-75  duration-700" : "sticky h-25 top-0 duration-200"}
      sm:h-35 sm:min-h-35 sm:items-center sm:sticky sm:top-0`}
      ref={headerRef}
    >
      <div className="text-4xl" aria-label="icon">
        M
      </div>
      {headerOpen ? (
        <nav className="flex flex-col flex-1 space-x-2 items-center justify-evenly sm:flex-row sm:">
          <Link
            className={`${pathname === "/" ? "activePathname" : ""}`}
            onClick={() => handleLinkClick()}
            href={`/`}
          >
            Home
          </Link>
          <Link
            className={`${pathname === "/office" ? "activePathname" : ""}`}
            onClick={() => handleLinkClick()}
            href={`/office`}
          >
            Office
          </Link>
          <Link
            className={`${pathname === "/events" ? "activePathname" : ""}`}
            onClick={() => handleLinkClick()}
            href={`/events`}
          >
            Events
          </Link>
          <Link
            className={`${pathname === "/squad" ? "activePathname" : ""}`}
            onClick={() => handleLinkClick()}
            href={`/squad`}
          >
            Squad
          </Link>
          <Link
            className={`${pathname === "/wadau" ? "activePathname" : ""}`}
            onClick={() => handleLinkClick()}
            href={`/wadau`}
          >
            Wadau
          </Link>
          <Link
            className={`${pathname === "/about" ? "activePathname" : ""}`}
            onClick={() => handleLinkClick()}
            href={`/about`}
          >
            About
          </Link>
          <Link
            className={`${pathname === "/become-member" ? "activePathname" : ""}`}
            onClick={() => handleLinkClick()}
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
