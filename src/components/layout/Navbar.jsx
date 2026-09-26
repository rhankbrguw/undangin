import { Logo } from '../ui/Logo';
import { Button } from '../ui/button';
import { APP_STRINGS } from '../../constants/strings';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 md:h-20 items-center bg-background/80 px-4 md:px-6 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }} className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors duration-200">{APP_STRINGS.navFeatures}</a>
          <a href="#pricing" className="hover:text-primary transition-colors duration-200">{APP_STRINGS.navPricing}</a>
        </div>
        <div className="flex items-center gap-4">
          <Button className="cursor-pointer shadow-lg shadow-primary/20 rounded-full px-5 md:px-8 h-8 md:h-10 text-xs md:text-sm font-bold tracking-wide">
            {APP_STRINGS.ctaPrimary}
          </Button>
        </div>
      </div>
    </nav>
  );
}
