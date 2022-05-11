import { GitBranch } from "phosphor-react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getQueryCode } from "../util/getQueryUrl";

export function Footer() {
    const [query, setQuery] = useSearchParams();

    return (
        <footer className="text-xs flex justify-center">
            <a
                href="https://github.com/devmaicon85/widget"
                className="flex hover:underline"
                target="_blank"
            >
                <GitBranch size={18} className="ml-1 mr-1" /> Desenvolvido por
                DevMaicon
            </a>
        </footer>
    );
}
