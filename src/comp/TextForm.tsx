import { useMemo, useState } from 'react';
import type { AlertType } from '../App';

type TextFormProps = {
    heading: string;
    showAlert: (msg: string, type: AlertType) => void;
};

// Icons
const ArrowUpIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
);

const ArrowDownIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
);

const TypeIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707" />
    </svg>
);

const SpacesIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const LinesIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const CopyIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const TrashIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const DownloadIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export default function TextForm(props: TextFormProps) {
    const [txt, setTxt] = useState("");

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTxt(event.target.value);
    }

    const requireText = (actionLabel: string) => {
        if (!txt || txt.trim().length === 0) {
            props.showAlert(`Enter some text to ${actionLabel}.`, 'info');
            return false;
        }
        return true;
    };

    const handleUpClick = () => {
        if (!requireText('convert to UPPERCASE')) return;
        setTxt(txt.toUpperCase());
        props.showAlert('Converted to UPPERCASE.', 'success');
    }

    const handleDownClick = () => {
        if (!requireText('convert to lowercase')) return;
        setTxt(txt.toLowerCase());
        props.showAlert('Converted to lowercase.', 'success');
    }

    const titleCase = () => {
        if (!requireText('convert to Title Case')) return;
        const next = txt.replace(/\p{L}+/gu, (word) => {
            const lower = word.toLocaleLowerCase();
            return lower.charAt(0).toLocaleUpperCase() + lower.slice(1);
        });
        setTxt(next);
        props.showAlert('Converted to Title Case.', 'success');
    }

    const RemoveExtraSpace = () => {
        if (!requireText('remove extra spaces')) return;
        const next = txt
            .split(/\n/)
            .map((line) => line.replace(/[\t ]{2,}/g, ' ').trim())
            .join('\n');
        setTxt(next);
        props.showAlert('Extra spaces removed.', 'success');
    }

    const RemoveExtraLine = () => {
        if (!requireText('remove extra lines')) return;
        let newTxt = txt.replace(/\n{2,}/g, '\n').trim();
        setTxt(newTxt);
        props.showAlert('Extra lines removed.', 'success');
    }

    const clipboard = () => {
        if (!requireText('copy')) return;
        navigator.clipboard.writeText(txt);
        props.showAlert("Copied to clipboard.", "success");
    };

    const clearTxt = () => {
        setTxt("");
        props.showAlert("Cleared.", "warning");
    }

    const down = () => {
        if (!requireText('download')) return;
        const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const ele = document.createElement('a');
        ele.href = url;
        ele.download = 'textmanipulator.txt';
        document.body.appendChild(ele);
        ele.click();
        ele.remove();
        URL.revokeObjectURL(url);
        props.showAlert('Downloaded as .txt', 'success');
    }

    const stats = useMemo(() => {
        const words = txt.trim().length === 0 ? 0 : txt.trim().split(/\s+/).length;
        const chars = txt.length;
        const lines = txt.length === 0 ? 0 : txt.split('\n').length;
        const minutesToRead = words === 0 ? 0 : Math.max(0.1, words / 200);
        return { words, chars, lines, minutesToRead };
    }, [txt]);

    // Button component for consistency
    const ActionButton = ({
        onClick,
        icon,
        label,
        primary = false
    }: {
        onClick: () => void;
        icon: React.ReactNode;
        label: string;
        primary?: boolean;
    }) => (
        <button
            onClick={onClick}
            className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${primary ? 'btn' : 'btn-secondary'}`}
            title={label}
        >
            <span className="transition-transform duration-200 group-hover:scale-110">{icon}</span>
            <span className="hidden sm:inline">{label}</span>
        </button>
    );

    return (
        <section className="space-y-6">
            {/* Header */}
            <div className="text-center">
                <h1
                    className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                    style={{ color: 'var(--color-text)' }}
                >
                    <span className="gradient-text">{props.heading}</span>
                </h1>
                <p
                    className="mx-auto mt-4 max-w-2xl text-base sm:text-lg"
                    style={{ color: 'var(--color-text-muted)' }}
                >
                    Paste text, run transformations, and analyze — all in your browser.
                    <span className="hidden sm:inline"> Fast, private, and free.</span>
                </p>
            </div>

            {/* Main Card */}
            <div className="card-glow">
                <textarea
                    spellCheck="false"
                    className="input font-mono min-h-[220px] resize-y text-sm leading-relaxed"
                    value={txt}
                    onChange={handleOnChange}
                    id="mybox"
                    rows={10}
                    placeholder="Type or paste your text here..."
                    style={{
                        background: 'var(--color-bg-subtle)',
                    }}
                />

                {/* Action Buttons */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {/* Transform Group */}
                    <div
                        className="flex flex-wrap gap-1 rounded-lg p-1"
                        style={{ background: 'var(--color-bg-subtle)' }}
                    >
                        <ActionButton onClick={handleUpClick} icon={<ArrowUpIcon />} label="UPPERCASE" primary />
                        <ActionButton onClick={handleDownClick} icon={<ArrowDownIcon />} label="lowercase" primary />
                        <ActionButton onClick={titleCase} icon={<TypeIcon />} label="Title Case" primary />
                    </div>

                    {/* Clean Group */}
                    <div
                        className="flex flex-wrap gap-1 rounded-lg p-1"
                        style={{ background: 'var(--color-bg-subtle)' }}
                    >
                        <ActionButton onClick={RemoveExtraSpace} icon={<SpacesIcon />} label="Trim Spaces" />
                        <ActionButton onClick={RemoveExtraLine} icon={<LinesIcon />} label="Trim Lines" />
                    </div>

                    {/* Utility Group */}
                    <div
                        className="flex flex-wrap gap-1 rounded-lg p-1"
                        style={{ background: 'var(--color-bg-subtle)' }}
                    >
                        <ActionButton onClick={clipboard} icon={<CopyIcon />} label="Copy" />
                        <ActionButton onClick={clearTxt} icon={<TrashIcon />} label="Clear" />
                        <ActionButton onClick={down} icon={<DownloadIcon />} label="Download" />
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: 'Words', value: stats.words, icon: '📝' },
                    { label: 'Characters', value: stats.chars, icon: '🔤' },
                    { label: 'Lines', value: stats.lines, icon: '📃' },
                    { label: 'Read Time', value: `${stats.minutesToRead.toFixed(1)}m`, icon: '⏱️' },
                ].map((stat) => (
                    <div key={stat.label} className="stat-card group">
                        <div className="flex items-center justify-between">
                            <span
                                className="text-sm font-medium"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                {stat.label}
                            </span>
                            <span className="text-lg transition-transform duration-200 group-hover:scale-125">
                                {stat.icon}
                            </span>
                        </div>
                        <div
                            className="mt-1 text-2xl font-bold tabular-nums"
                            style={{ color: 'var(--color-text)' }}
                        >
                            {stat.value}
                        </div>
                    </div>
                ))}
            </div>

            {/* Preview Panel */}
            <div className="card">
                <div className="mb-3 flex items-center justify-between">
                    <h2
                        className="text-lg font-semibold"
                        style={{ color: 'var(--color-text)' }}
                    >
                        Preview
                    </h2>
                    {txt.trim().length > 0 && (
                        <span
                            className="rounded-full px-2 py-0.5 text-xs font-medium"
                            style={{
                                background: 'var(--color-success)',
                                color: '#fff',
                            }}
                        >
                            Live
                        </span>
                    )}
                </div>
                <div
                    className="font-mono max-h-64 overflow-y-auto whitespace-pre-wrap rounded-lg p-4 text-sm leading-relaxed"
                    style={{
                        background: 'var(--color-bg-subtle)',
                        border: '1px solid var(--color-border)',
                        color: txt.trim().length > 0 ? 'var(--color-text)' : 'var(--color-text-muted)',
                    }}
                >
                    {txt.trim().length > 0
                        ? txt
                        : 'Your transformed text will appear here...'}
                </div>
            </div>
        </section>
    )
}