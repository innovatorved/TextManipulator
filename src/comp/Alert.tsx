import type { AlertPayload } from '../App';

const firstTitleCase = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

type AlertProps = {
    alertMsg: AlertPayload | null;
};

export default function Alert(props: AlertProps){
    const type = props.alertMsg?.type;
    const stylesByType = {
        success: 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-100',
        info: 'border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-900/50 dark:bg-sky-950/40 dark:text-sky-100',
        warning: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-100',
        danger: 'border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-100',
        error: 'border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-100',
    } as const;

    const resolvedClassName =
        (type ? stylesByType[type] : undefined) ??
        'border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100';

    return (
        <div className="pointer-events-none fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm">
            {props.alertMsg && (
                <div
                    role="status"
                    className={`pointer-events-auto rounded-2xl border px-4 py-3 shadow-sm ${resolvedClassName}`}
                >
                    <div className="text-sm">
                        <span className="font-semibold">{firstTitleCase(type ?? 'Info')}:</span> {props.alertMsg.msg}
                    </div>
                </div>
            )}
        </div>
    )
}