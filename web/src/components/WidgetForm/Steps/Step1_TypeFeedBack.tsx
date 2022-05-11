import { useParams, useSearchParams } from "react-router-dom";
import { FeedBackType, feedbackTypes } from "../../../types/FeedBackTypes";
import { getQueryTitle, getQueryTheme } from "../../../util/getQueryUrl";
import { Button } from "../../Button";
import { HeaderForm } from "../../HeaderForm";

type Props = {
    onFeedbackTypeChanged: (key: FeedBackType) => void;
};
export function Step1_TypeFeedBack({ onFeedbackTypeChanged }: Props) {
    const { code } = useParams();
    const [query, setQuery] = useSearchParams();

    return (
        <>
            <HeaderForm>{getQueryTitle()}</HeaderForm>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, item]) => (
                    <Button
                        key={key}
                        onClick={() =>
                            onFeedbackTypeChanged(key as FeedBackType)
                        }
                        className={`py-5 flex-col items-center gap-3`}
                    >
                        <img src={item.image.src} alt={item.image.alt} />
                        <span>{item.title}</span>
                    </Button>
                ))}
            </div>
        </>
    );
}
