import { useRef } from 'react';
import type { AlertType } from '../App';
// let mongo = require("mongodb");

type ContactProps = {
    showAlert: (msg: string, type: AlertType) => void;
};

export default function Contact(props: ContactProps) {
    const fname = useRef<HTMLInputElement | null>(null);
    const lname = useRef<HTMLInputElement | null>(null);
    const sub = useRef<HTMLInputElement | null>(null);
    const mail = useRef<HTMLInputElement | null>(null);
    const msg = useRef<HTMLTextAreaElement | null>(null);

    const FormExe = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const obj1 = {
            Name : `${fname.current?.value ?? ''} ${lname.current?.value ?? ''}`.trim(),
            Subject : sub.current?.value ?? '',
            Email : mail.current?.value ?? '',
            txtMsg : msg.current?.value ?? '',
        };
        void obj1;

        if (fname.current) fname.current.value = "";
        if (lname.current) lname.current.value = "";
        if (sub.current) sub.current.value = "";
        if (mail.current) mail.current.value = "";
        if (msg.current) msg.current.value = "";
        // console.log(obj1);
        // props.saveCol(obj1);
        props.showAlert("Feedback send Successfully !" , "success");
    };
    
    return (
        <section className="card">
            <h1 className="font-link text-2xl font-semibold tracking-tight">Contact</h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Share feedback or ideas. This demo form just clears fields and shows a success alert.
            </p>

            <form onSubmit={FormExe} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="validationCustom01" className="font-link text-sm font-medium">
                            First name
                        </label>
                        <input
                            type="text"
                            className="input mt-2"
                            id="validationCustom01"
                            placeholder="First name"
                            ref={fname}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="validationCustom02" className="font-link text-sm font-medium">
                            Last name
                        </label>
                        <input
                            type="text"
                            className="input mt-2"
                            id="validationCustom02"
                            placeholder="Last name"
                            ref={lname}
                        />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="validationDefault03" className="font-link text-sm font-medium">
                            Subject
                        </label>
                        <input
                            type="text"
                            className="input mt-2"
                            id="validationDefault03"
                            placeholder="Subject"
                            ref={sub}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="exampleFormControlInput1" className="font-link text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            className="input mt-2"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            ref={mail}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="validationTextarea" className="font-link text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        className="input mt-2 min-h-[140px] resize-y"
                        id="validationTextarea"
                        placeholder="Your message…"
                        rows={4}
                        ref={msg}
                        required
                    />
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                        Please enter a message in the textarea.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}