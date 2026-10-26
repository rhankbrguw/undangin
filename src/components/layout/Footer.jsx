import { Logo } from "../ui/Logo";
import { FloralAccent } from "../ui/FloralAccent";
import { APP_STRINGS } from "../../constants/strings";
import { ModeToggle } from "../mode-toggle";

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border py-6 px-6 relative z-10 shadow-[0_-4px_15px_-10px_rgba(0,0,0,0.1)] overflow-hidden">
      <FloralAccent
        className="top-[-80%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-15"
        type="flower"
      />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
        {/* Logo (Centered on mobile, left on desktop) */}
        <div className="flex justify-center md:justify-start">
          <Logo className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 scale-90 md:scale-100" />
        </div>

        {/* Copyright (Absolutely centered on desktop) */}
        <div className="flex justify-center">
          <p className="text-muted-foreground font-medium text-sm">
            {APP_STRINGS.footerText}
          </p>
        </div>

        {/* Links & Toggle (Centered on mobile, right on desktop) */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-5">
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Privacy
          </a>
          <div className="w-1.5 h-1.5 rounded-full bg-border hidden sm:block" />
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Terms
          </a>
          <div className="w-1.5 h-1.5 rounded-full bg-border hidden sm:block" />
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
