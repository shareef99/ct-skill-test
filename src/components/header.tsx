import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Header() {
  // State
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Effects{
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={twMerge(
        "sticky top-0 z-50 transition-colors duration-300 ease-in",
        isAtTop ? "bg-transparent" : "",
      )}
    >
      <div className="container flex max-w-5xl items-center justify-between py-4">
        <a href="#" className="flex gap-4">
          <img src="/images/logo.png" alt="logo" />
          <img
            src="images/logo-name.png"
            className={twMerge(
              isAtTop ? "invisible animate-fade-out" : "animate-fade-in",
            )}
            alt="logo name"
          />
        </a>
        <div
          className="size-8 cursor-pointer sm:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            viewBox="0 0 48 48"
            version="1"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 48 48"
          >
            <g fill="#000">
              <rect x="6" y="22" width="36" height="4" />
              <rect x="6" y="10" width="36" height="4" />
              <rect x="6" y="34" width="36" height="4" />
            </g>
          </svg>
        </div>
        <div
          className={twMerge(
            "absolute right-4 top-20 flex flex-col items-center gap-4 bg-white p-4 transition-colors duration-300 ease-in sm:relative sm:top-0 sm:flex-row sm:gap-12 sm:bg-transparent sm:p-0",
            isAtTop ? "text-black sm:text-white" : "text-black",
            isMenuOpen ? "flex" : "hidden sm:flex",
          )}
        >
          <a
            href="#history"
            className="font-lato font-bold italic underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            01. HISTORY
          </a>
          <a
            href="#team"
            className="font-lato font-bold italic underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            02. TEAM
          </a>
        </div>
      </div>
    </header>
  );
}
