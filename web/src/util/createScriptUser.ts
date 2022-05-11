type Props = {
    theme: string;
    title: string;
    email: string;
    open: string;
    code: string;
    whatsApp: string;
};
export function createScriptUser(props: Props) {
    const script = `<script
                        async
                        data-theme="${props.theme}"
                        data-title="${props.title}"
                        data-email="${props.email}"
                        data-whatsapp="${props.whatsApp}"
                        data-open="${props.open}"
                        data-code="${props.code}"
                        src="${window.location.origin}/widget.js"np
                    ></script>`;
    return script.trim();
}

export function executeScriptUser(props: Props) {
    let srcIframe = "";
    let iFrame: HTMLIFrameElement;
    let iFrameElement = document.getElementById("iframeWidget");

    const script = document.createElement("script");

    script.id = "script";
    script.src = `${window.location.origin}/widget.js`;
    script.async = true;
    script.setAttribute("data-theme", props.theme);
    script.setAttribute("data-title", props.title);
    script.setAttribute("data-email", props.email);
    script.setAttribute("data-whatsapp", props.whatsApp);
    script.setAttribute("data-open", props.open);
    script.setAttribute("data-code", props.code);

    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script);
    };
}
