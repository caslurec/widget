import { Camera, CircleNotch, Spinner, Trash } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Loading } from "../Loading";
import html2canvas from "html2canvas";
import { getQueryTheme } from "../../util/getQueryUrl";
import { Button } from "../Button";

type Props = {
    setScreenshot: (img: string | null) => void;
    screenshot: string | null;
};
export function ScreenshotButton({ setScreenshot, screenshot }: Props) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector("html")!);
        const base64image = canvas.toDataURL("images/png");
        setScreenshot(base64image);
        setIsTakingScreenshot(false);
    }
    return (
        <>
            {!screenshot && (
                <Button
                    type="button"
                    title="Tirar foto da tela atual"
                    onClick={handleTakeScreenshot}
                >
                    {!isTakingScreenshot && (
                        <Camera className="w-6 h-6 " weight="light" />
                    )}
                    {isTakingScreenshot && <Loading />}
                </Button>
            )}

            {screenshot && (
                <Button
                    title="Excluir foto tirada da tela"
                    onClick={() => setScreenshot(null)}
                    className="flex-none bg-transparent p-0"
                >
                    <img
                        className="w-10 h-10 border-2 rounded-md"
                        src={screenshot}
                        alt="screenshot"
                    />
                    <Trash
                        weight="bold"
                        className="
                        text-light-text-secondary 
                        dark:text-dark-text-secondary 
                        text-base
                        absolute left-6 bottom-[3rem]"
                    />
                </Button>
            )}
        </>
    );
}
