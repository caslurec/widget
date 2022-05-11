import { FormEvent, useEffect, useState } from "react";
import { FeedBackType, feedbackTypes } from "../../../types/FeedBackTypes";
import {
    getQueryEmail,
    getQueryTitle,
    getWhatsApp,
} from "../../../util/getQueryUrl";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { HeaderForm } from "../../HeaderForm";
import { Loading } from "../../Loading";
import { TextArea } from "../../TextArea";
import { api } from "../../../lib/api";
import { ScreenshotButton } from "../ScreenshotButton";

type Props = {
    feedbackType: FeedBackType;
    onFeedbackRestartType: () => void;
    onFeedbackSent: () => void;
};

export function Step2_Content({
    feedbackType,
    onFeedbackRestartType,
    onFeedbackSent,
}: Props) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState<string | null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const [textButtonSend, setTextButtonSend] = useState("Enviar");
    const [emailReplyTo, setEmailReplyTo] = useState("");

    const title = getQueryTitle();
    const emailSendTo = getQueryEmail() ?? "";

    const [whatsApp, setWhatsApp] = useState(getWhatsApp());

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        setIsSendingFeedback(true);

        try {
            await api.post("/feedbacks", {
                type: feedbackTypes[feedbackType].title,
                emailReplyTo,
                emailSendTo,
                screenshot,
                comment,
                title,
            });

            let message = "";
            message +=
                emailReplyTo.length > 5 ? `E-mail: ${emailReplyTo} - ` : "";
            message += comment;

            if (whatsApp) {
                const linkWhatsApp = encodeURI(
                    `https://api.whatsapp.com/send?phone=${whatsApp}&text=${message}`
                );
                window.open(linkWhatsApp, "_blank");
            }
        } catch (error) {
            // alert(`Erro ao enviar feed back ${error}`);
            setTextButtonSend("Ocorreu um erro. Tentar novamente");
            setIsSendingFeedback(false);
            console.log(error);
            return;
        }

        onFeedbackSent();
        setIsSendingFeedback(false);
    }
    return (
        <>
            <HeaderForm
                imgUrl={feedbackTypes[feedbackType].image.src}
                imgAlt={feedbackTypes[feedbackType].image.alt}
                onFeedbackRestart={onFeedbackRestartType}
            >
                {feedbackTypes[feedbackType].title}
            </HeaderForm>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <TextArea
                    title={feedbackTypes[feedbackType].placeholder}
                    placeholder={feedbackTypes[feedbackType].placeholder}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Input
                    placeholder="seu e-mail (opcional)"
                    onChange={(e) => setEmailReplyTo(e.target.value)}
                    title="digite seu email caso seja necessário que entrarmos em contato"
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        setScreenshot={setScreenshot}
                        screenshot={screenshot}
                    />
                    <Button
                        disabled={!comment || isSendingFeedback}
                        type="submit"
                    >
                        {isSendingFeedback ? <Loading /> : textButtonSend}
                    </Button>
                </footer>
            </form>
        </>
    );
}
