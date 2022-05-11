import { Popover } from "@headlessui/react";
import { ArrowLeft } from "phosphor-react";
export function ButtonArrowLeft({ ...rest }) {
    return (
        <button
            {...rest}
            className="top-5 left-5 absolute 
            text-xl 
            text-light-text-secondary hover:text-light-text-primary
            dark:text-dark-text-secondary dark:hover:text-dark-text-primary"
            title="Voltar para escolher tipo de FeedBack"
        >
            <ArrowLeft className="w-4 h-4" weight="bold" />
        </button>
    );
}
