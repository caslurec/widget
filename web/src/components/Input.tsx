import { getQueryTheme } from "../util/getQueryUrl";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export function Input({ className, ...rest }: InputProps) {
    return (
        <input
            className={`${className}
            w-full 
            text-sm
            border
            h-9
            p-3
            dark:placeholder-dark-text-secondary dark:text-dark-text-primary dark:border-dark-stroke
            placeholder-light-text-secondary text-light-text-primary border-light-stroke
            bg-transparent
            outline-none
            focus:border-brand-theme${getQueryTheme()}
            focus:ring-brand-theme${getQueryTheme()}
            focus:ring-1
            resize-none
            rounded scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin
            `}
            {...rest}
        />
    );
}
