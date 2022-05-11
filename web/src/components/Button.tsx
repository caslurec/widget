import { getQueryTheme } from "../util/getQueryUrl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...rest }: ButtonProps) {
    return (
        <button
            className={`p-2
                        rounded-[4px]
                        flex-1 flex justify-center items-center text-sm
                        outline-none
                        disabled:opacity-40
                        transition-colors

                        bg-brand-theme${getQueryTheme()}
                        bg-opacity-10

                        border
                        border-brand-theme${getQueryTheme()}
                        border-opacity-30
                        
                        hover:bg-brand-theme${getQueryTheme()}
                        hover:bg-opacity-[6%]
                        hover:border-brand-theme${getQueryTheme()}
                        hover:border-opacity-30
                        
                        focus:ring-1
                        focus:ring-offset-1
                        focus:ring-brand-theme${getQueryTheme()}
                        focus:border-brand-theme${getQueryTheme()}

                        text-light-text-primary
                        
                        dark:bg-brand-theme${getQueryTheme()}
                        dark:text-dark-text-primary 
                        dark:focus:ring-offset-dark-surface-primary

                        ${className}
                        
                        `}
            {...rest}
        ></button>
    );
}
