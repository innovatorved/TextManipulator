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
      showAlert("Dark Mode is Enable", "success");
    } else {
      setMode("light");
      showAlert("Bright Mode is Enable", "success");
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
    }, 2000);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
        <Alert alertMsg={alertVar} />

        <main className="mx-auto w-full max-w-5xl px-4 py-8">
          <TextForm
            heading={"Modern text tools — clean, transform, and analyze"}
            showAlert={showAlert}
          />
        </main>
      </div>
    </>
  );
}

export default App;