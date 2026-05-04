import Link from "next/link";
import { OpenCloseButton } from "./OpenCloseButton";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between min-h-screen bg-red-500/50 backdrop-blur-lg p-2">
      <div className="text-4xl" aria-label="icon">
        M
      </div>
      <nav className="flex flex-col flex-1 space-x-2 items-center justify-evenly ">
        <Link href={`/`}>Home</Link>
        <Link href={`/office`}>Office</Link>
        <Link href={`/events`}>Events</Link>
        <Link href={`/squad`}>Squad</Link>
        <Link href={`/wadau`}>Wadau</Link>
        <Link href={`/about`}>About</Link>
      </nav>
      <OpenCloseButton />
    </header>
  );
};
