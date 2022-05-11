import { useSearchParams } from "react-router-dom";

export function getQueryTheme() {
    const [query] = useSearchParams();
    return query.get("theme") ?? "0";
}

export function getQueryTitle() {
    const [query] = useSearchParams();
    return query.get("title") ?? "Deixe seu Feedback";
}

export function getQueryCode() {
    const [query] = useSearchParams();
    return query.get("code") ?? "demo";
}

export function getQueryEmail() {
    const [query] = useSearchParams();
    return query.get("email") ?? "contato@minhaempresa.com";
}

export function getWhatsApp() {
    const [query] = useSearchParams();
    return query.get("whatsapp") ?? "";
}

export function getQueryOpen() {
    const [query] = useSearchParams();
    return query.get("open") === "false" ? false : true;
}
