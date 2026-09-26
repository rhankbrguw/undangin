import { APP_STRINGS } from '../../constants/strings';

export function Logo({ className = "" }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      onClick={scrollToTop}
      className={`flex items-center gap-3 font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity ${className}`}
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-background shadow-sm overflow-hidden border border-border/50">
        <img 
          src="/logo-undangin.jpeg" 
          alt="Undangin Logo" 
          className="h-full w-full object-cover mix-blend-multiply"
        />
      </div>
      <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-0.5">
        {APP_STRINGS.appName}
      </span>
    </div>
  );
}
