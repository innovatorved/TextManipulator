import type { AlertPayload } from '../App';

const firstTitleCase = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

type AlertProps = {
    alertMsg: AlertPayload | null;
};

// Icons for each alert type
const icons = {
    success: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    info: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    warning: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
    danger: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    error: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
};

const stylesByType = {
    success: {
        bg: 'rgba(35, 134, 54, 0.15)',
        border: 'rgba(63, 185, 80, 0.4)',
        text: '#3fb950',
        dark: { bg: 'rgba(35, 134, 54, 0.15)', border: 'rgba(63, 185, 80, 0.4)', text: '#3fb950' },
    },
    info: {
        bg: 'rgba(56, 139, 253, 0.15)',
        border: 'rgba(88, 166, 255, 0.4)',
        text: '#58a6ff',
        dark: { bg: 'rgba(56, 139, 253, 0.15)', border: 'rgba(88, 166, 255, 0.4)', text: '#58a6ff' },
    },
    warning: {
        bg: 'rgba(210, 153, 34, 0.15)',
        border: 'rgba(210, 153, 34, 0.4)',
        text: '#d29922',
        dark: { bg: 'rgba(210, 153, 34, 0.15)', border: 'rgba(210, 153, 34, 0.4)', text: '#d29922' },
    },
    danger: {
        bg: 'rgba(248, 81, 73, 0.15)',
        border: 'rgba(248, 81, 73, 0.4)',
        text: '#f85149',
        dark: { bg: 'rgba(248, 81, 73, 0.15)', border: 'rgba(248, 81, 73, 0.4)', text: '#f85149' },
    },
    error: {
        bg: 'rgba(248, 81, 73, 0.15)',
        border: 'rgba(248, 81, 73, 0.4)',
        text: '#f85149',
        dark: { bg: 'rgba(248, 81, 73, 0.15)', border: 'rgba(248, 81, 73, 0.4)', text: '#f85149' },
    },
} as const;

export default function Alert(props: AlertProps) {
    const type = props.alertMsg?.type ?? 'info';
    const styles = stylesByType[type] ?? stylesByType.info;

    return (
        <div className="pointer-events-none fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm">
            {props.alertMsg && (
                <div
                    role="status"
                    className="pointer-events-auto animate-slide-in flex items-start gap-3 rounded-xl px-4 py-3 shadow-lg backdrop-blur-lg"
                    style={{
                        background: styles.bg,
                        border: `1px solid ${styles.border}`,
                    }}
                >
                    <span style={{ color: styles.text }} className="flex-shrink-0 mt-0.5">
                        {icons[type]}
                    </span>
                    <div className="flex-1 text-sm">
                        <span
                            className="font-semibold"
                            style={{ color: styles.text }}
                        >
                            {firstTitleCase(type)}:
                        </span>{' '}
                        <span style={{ color: 'var(--color-text)' }}>
                            {props.alertMsg.msg}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}