export default function About() {
    return (
        <section className="space-y-4">
            <header className="card">
                <h1 className="font-link text-2xl font-semibold tracking-tight">About</h1>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    TextManipulator is a lightweight text toolkit for quick cleaning, transformations, and analysis.
                </p>
            </header>

            <div className="card">
                <div className="space-y-3">
                    <details className="group rounded-xl border border-slate-200 p-4 dark:border-slate-800" open>
                        <summary className="cursor-pointer select-none font-semibold">
                            What is TextManipulator?
                        </summary>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                            It’s a browser-based app that helps you clean up text (spaces/lines), transform casing, and get quick stats.
                        </p>
                    </details>

                    <details className="group rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                        <summary className="cursor-pointer select-none font-semibold">
                            Why TextManipulator?
                        </summary>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                            Great for formatting notes, preparing content, and quickly checking word/character counts.
                        </p>
                    </details>

                    <details className="group rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                        <summary className="cursor-pointer select-none font-semibold">
                            Browser compatible & free to use
                        </summary>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                            Runs in modern browsers and keeps your text local (no server processing).
                        </p>
                    </details>
                </div>
            </div>
        </section>
    )
}