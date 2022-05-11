import { Popover } from "@headlessui/react";
import { ChatTeardropDots, X } from "phosphor-react";
import { useEffect, useState } from "react";
import {
    getQueryTheme,
    getQueryTitle,
    getQueryOpen,
} from "../util/getQueryUrl";
import { WidgetForm } from "../components/WidgetForm/Index";
import { CloseButton } from "../components/CloseButton";
import { resetFrameSizeWindowParent } from "../util/resetFrameSizeWindowParent";

export function WidgetPage() {
    const [openWidget, setOpenWidget] = useState(false);

    const queryOpenWidget = getQueryOpen();

    useEffect(() => {
        resetFrameSizeWindowParent();
    }, [openWidget]);

    useEffect(() => {
        setOpenWidget(queryOpenWidget);
    }, []);

    return (
        <Popover
            id="popover"
            className="
                absolute
                right-0
                bottom-0
                flex flex-col 
                items-end justify-end
                "
        >
            {({ open, close }) => (
                <>
                    {openWidget && (
                        <Popover.Panel static>
                            <WidgetForm />
                            <CloseButton onClick={() => setOpenWidget(false)} />
                        </Popover.Panel>
                    )}

                    <Popover.Button
                        onClick={() => setOpenWidget(!openWidget)}
                        className={`
                                bg-brand-theme${getQueryTheme()}
                                rounded-full    
                                focus:brightness-110
                                outline-none

                                
                                px-3 h-12 text-white flex items-center group
                            `}
                    >
                        <ChatTeardropDots className="w-6 h-6" />{" "}
                        <span
                            className={`
                            max-w-0 overflow-hidden 
                            
                             ${
                                 openWidget
                                     ? "max-w-full"
                                     : "group-hover:max-w-xs"
                             } 
                            transition duration-150 ease-out hover:ease-in`}
                        >
                            <span className="pl-2">{getQueryTitle()}</span>
                        </span>
                    </Popover.Button>
                </>
            )}
        </Popover>
    );
}
