import type { ThemeMode } from '../App';

type NavbarProps = {
  title: string;
  mode: ThemeMode;
  toggleMode: () => void;
};

export default function Navbar({
  title,
  mode,
  toggleMode,
}: NavbarProps) {
  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <div className="font-link text-lg font-semibold tracking-tight">
            {title}
          </div>
        </div>

        <nav className="flex items-center justify-between gap-3 sm:justify-end">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toggleMode}
            aria-label="Toggle theme"
          >
            {mode === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}

