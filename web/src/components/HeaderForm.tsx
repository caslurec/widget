import { useEffect, useState } from "react";
import { ButtonArrowLeft } from "./ButtonArrowLeft";
import { CloseButton } from "./CloseButton";

type HeaderFormProps = {
    children: React.ReactNode;
    onFeedbackRestart?: () => void;
    imgUrl?: string;
    imgAlt?: string;
};
export function HeaderForm({
    children,
    onFeedbackRestart,
    imgUrl,
    imgAlt,
}: HeaderFormProps) {
    return (
        <header>
            {onFeedbackRestart && (
                <ButtonArrowLeft onClick={onFeedbackRestart} />
            )}

            <span className="text-xl leading-6 flex items-center text-center  justify-center ">
                {imgUrl && (
                    <img className="w-6 h-6 mr-2" src={imgUrl} alt={imgAlt} />
                )}
                <span className="text-xl ">{children}</span>
            </span>
        </header>
    );
}
