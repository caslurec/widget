import { useEffect, useState } from "react";
import { Step1_TypeFeedBack } from "./Steps/Step1_TypeFeedBack";
import { Step2_Content } from "./Steps/Step2_Content";
import { Footer } from "../Footer";
import { Step3_Success } from "./Steps/Step3_Success";
import { FeedBackType } from "../../types/FeedBackTypes";
import { Theme } from "../ButtonTheme";
import { useParams } from "react-router-dom";
import { getQueryTheme } from "../../util/getQueryUrl";
import { resetFrameSizeWindowParent } from "../../util/resetFrameSizeWindowParent";

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    useEffect(() => {
        resetFrameSizeWindowParent();
    }, [feedbackSent, feedbackType]);

    return (
        <div
            className={`
                    min-w-[300px]
                    max-w-[400px]
                    
                    min-h-[300px]
                    justify-center
                    
                    text-light-text-primary 
                    dark:text-dark-text-primary
                    dark:bg-dark-background
                    bg-light-background
                        p-4 relative rounded-2xl mb-2 flex flex-col items-center
                    shadow-lg
                    w-[calc(100vw-2rem)]
                    sd:w-auto
                

                    border-2
                    border-t-0
                    border-l-0
                    border-brand-theme${getQueryTheme()}
                    border-opacity-50

                        `}
        >
            <div
                className={`
                dark:bg-brand-theme${getQueryTheme()}
                flex
                flex-col
                w-full
                rounded-md
                p-2
            `}
            >
                {!feedbackSent && !feedbackType && (
                    <Step1_TypeFeedBack
                        onFeedbackTypeChanged={setFeedbackType}
                    />
                )}

                {!feedbackSent && feedbackType && (
                    <Step2_Content
                        feedbackType={feedbackType}
                        onFeedbackRestartType={() => setFeedbackType(null)}
                        onFeedbackSent={() => setFeedbackSent(true)}
                    />
                )}

                {feedbackSent && (
                    <Step3_Success
                        onFeedbackRestartType={() => {
                            setFeedbackType(null), setFeedbackSent(false);
                        }}
                    />
                )}

                <Footer />
                <Theme />
            </div>
        </div>
    );
}
