import { useEffect, useState } from 'react';
import Alert from './comp/Alert';
import Navbar from './comp/Navbar';
import TextForm from './comp/TextForm';

export type ThemeMode = 'light' | 'dark';
export type AlertType = 'success' | 'info' | 'warning' | 'danger' | 'error';

export type AlertPayload = {
  msg: string;
  type: AlertType;
};

function App() {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode enabled", "success");
    } else {
      setMode("light");
      showAlert("Light Mode enabled", "success");
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);

  const [alertVar, setAlert] = useState<AlertPayload | null>(null);
  const showAlert = (msg: string, type: AlertType) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <div
      className="min-h-screen bg-pattern transition-colors duration-300"
      style={{ background: 'var(--color-bg)' }}
    >
      <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
      <Alert alertMsg={alertVar} />

      {/* Hero gradient background */}
      <div className="hero-gradient">
        <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:py-12">
          <TextForm
            heading={"Transform Your Text Instantly"}
            showAlert={showAlert}
          />
        </main>
      </div>

      {/* Footer */}
      <footer
        className="border-t py-6 text-center text-sm"
        style={{
          borderColor: 'var(--color-border)',
          color: 'var(--color-text-muted)',
        }}
      >
        <p>
          Built with ❤️ by{' '}
          <a
            href="https://vedgupta.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors hover:underline"
            style={{ color: 'var(--color-accent)' }}
          >
            Ved Gupta
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;