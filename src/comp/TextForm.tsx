import { useMemo, useState } from 'react';
import type { AlertType } from '../App';
import downloadIcon from './download.png';

type TextFormProps = {
    heading: string;
    showAlert: (msg: string, type: AlertType) => void;
};

export default function TextForm(props: TextFormProps) {
    const [txt , setTxt] = useState("");
    /* 
        By default value of text set by useState func parameter
        setTxt() - func use to cchange the text inside the txt var
    
    */
    const handleOnChange=(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        // console.log(event);
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

    const handleDownClick=()=>{
        if (!requireText('convert to lowercase')) return;
        setTxt(txt.toLowerCase());
        props.showAlert('Converted to lowercase.', 'success');
    }

    const titleCase = () => {
        if (!requireText('convert to Title Case')) return;
        // Preserve whitespace/newlines by only transforming letter-runs.
        // This avoids collapsing formatting (e.g., paragraphs, lists).
        const next = txt.replace(/\p{L}+/gu, (word) => {
            const lower = word.toLocaleLowerCase();
            return lower.charAt(0).toLocaleUpperCase() + lower.slice(1);
        });
        setTxt(next);
        props.showAlert('Converted to Title Case.', 'success');
    }

    const RemoveExtraSpace = () => {
        if (!requireText('remove extra spaces')) return;
        // Normalize spaces/tabs while preserving line breaks.
        const next = txt
            .split(/\n/)
            .map((line) => line.replace(/[\t ]{2,}/g, ' ').trim())
            .join('\n');
        setTxt(next);
        props.showAlert('Extra spaces removed.', 'success');
    }

    const RemoveExtraLine =()=>{
        if (!requireText('remove extra lines')) return;
        let newTxt = txt.replace(/\n{2,}/g, '\n').trim();
        setTxt(newTxt);
        props.showAlert('Extra lines removed.', 'success');
    }

    const clipboard = ()=> {
        /* Copy to ClipBoard */
        if (!requireText('copy')) return;
        navigator.clipboard.writeText(txt);
        props.showAlert("Copied to clipboard." , "success");
       
    }; 
    const clearTxt = () => {
        setTxt("");
        props.showAlert("Cleared." , "warning");
    }
    const down =()=>{
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

    return (
        <>
            <section className="space-y-4">
                <div className="card">
                    <div className="mb-4">
                        <h1 className="font-link text-2xl font-semibold tracking-tight">{props.heading}</h1>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                            Paste text, then run transformations. Everything stays in your browser.
                        </p>
                    </div>

                    <textarea
                        spellCheck="false"
                        className="input min-h-[220px] resize-y font-mono"
                        value={txt}
                        onChange={handleOnChange}
                        id="mybox"
                        rows={8}
                        placeholder="Type or paste text here…"
                    />

                    <div className="mt-4 flex flex-wrap gap-2">
                        <button className="btn" onClick={handleUpClick}>UPPERCASE</button>
                        <button className="btn" onClick={handleDownClick}>lowercase</button>
                        <button className="btn" onClick={titleCase}>Title Case</button>
                        <button className="btn btn-secondary" onClick={RemoveExtraSpace}>Trim spaces</button>
                        <button className="btn btn-secondary" onClick={RemoveExtraLine}>Trim lines</button>
                        <button className="btn btn-secondary" onClick={clipboard} title="Copy text to clipboard">Copy</button>
                        <button className="btn btn-secondary" onClick={clearTxt}>Clear</button>
                        <button
                            className="btn btn-secondary"
                            onClick={down}
                            title="Download as .txt"
                        >
                            <span className="mr-2">Download</span>
                            <img src={downloadIcon} alt="Download" className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="card md:col-span-1">
                        <h2 className="font-link text-lg font-semibold">Summary</h2>
                        <dl className="mt-3 space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                                <dt className="text-slate-600 dark:text-slate-300">Words</dt>
                                <dd className="font-semibold">{stats.words}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-slate-600 dark:text-slate-300">Characters</dt>
                                <dd className="font-semibold">{stats.chars}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-slate-600 dark:text-slate-300">Lines</dt>
                                <dd className="font-semibold">{stats.lines}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-slate-600 dark:text-slate-300">Read time</dt>
                                <dd className="font-semibold">{stats.minutesToRead.toFixed(1)}m</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="card md:col-span-2">
                        <h2 className="font-link text-lg font-semibold">Preview</h2>
                        <div className="mt-3 max-h-64 overflow-y-auto whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100">
                            {txt.trim().length > 0
                                ? txt
                                : 'Enter something above to preview and analyze your text.'}
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}