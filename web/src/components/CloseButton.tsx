import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function CloseButton({ ...rest }: ButtonProps) {
    return (
        <Popover.Button
            className="top-5 right-5 absolute 
            text-xl 
            dark:text-dark-text-secondary dark:hover:text-dark-text-primary
            text-light-text-secondary hover:text-light-text-primary"
            title="Fechar formulário de FeedBack"
            {...rest}
        >
            <X className="w-4 h-4" weight="bold" />
        </Popover.Button>
    );
}
