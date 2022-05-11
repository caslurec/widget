import { getQueryTheme } from "../util/getQueryUrl";

interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ ...rest }: TextAreaProps) {
    return (
        <textarea
            {...rest}
            className={` w-full min-h-[112px]
                    text-sm
                    rounded scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin

                    bg-transparent
                    border-light-stroke
                    text-light-text-primary 
                    focus:border-slate-300
                    focus:border-brand-theme${getQueryTheme()}
                    focus:ring-1
                    focus:ring-brand-theme${getQueryTheme()}

                    dark:placeholder-dark-text-secondary 
                    dark:text-dark-text-primary 
                    dark:border-dark-stroke
                    
                    placeholder-light-text-secondary 
                    resize-none
                    outline-none
                    `}
        />
    );
}
