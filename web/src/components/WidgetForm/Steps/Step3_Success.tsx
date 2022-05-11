import { useEffect } from "react";
import imageSuccess from "../../../assets/success.svg";
import { getQueryTheme } from "../../../util/getQueryUrl";
import { CloseButton } from "../../CloseButton";
import { HeaderForm } from "../../HeaderForm";

type Props = {
    onFeedbackRestartType: () => void;
};
export function Step3_Success({ onFeedbackRestartType }: Props) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-full">
                <img src={imageSuccess} alt="Sucesso" className="w-10 h-10" />
                <h1 className="text-xl mt-2">Enviado com sucesso!</h1>
                <button
                    onClick={onFeedbackRestartType}
                    className={`py-2 px-6 mt-6 
                        dark:bg-dark-surface-secondary 
                        dark:hover:bg-dark-surface-secondary-hover
                        dark:focus:ring-offset-dark-surface-primary
                        dark:focus:bg-opacity-80
                        focus:ring-brand-theme${getQueryTheme()}

                        bg-light-surface-secondary 
                        hover:bg-light-surface-secondary-hover
                    
                        rounded border-transparent text-sm leading-6 
                        outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        transition-colors`}
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    );
}
