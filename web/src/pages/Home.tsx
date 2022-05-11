import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import Header from "../components/HeaderPage";
import {
    getQueryCode,
    getQueryEmail,
    getQueryOpen,
    getQueryTheme,
    getQueryTitle,
    getWhatsApp,
} from "../util/getQueryUrl";
import { openWidget } from "../util/widget";
import { Check } from "phosphor-react";
import { createScriptUser, executeScriptUser } from "../util/createScriptUser";

export function Home() {
    const [theme, setTheme] = useState(getQueryTheme());
    const [title, setTitle] = useState(getQueryTitle());
    const [email, setEmail] = useState(getQueryEmail());
    const [whatsApp, setWhatsApp] = useState(getWhatsApp());
    const [code, setCode] = useState(getQueryCode());
    const [open, setOpen] = useState(getQueryOpen());

    useEffect(() => {
        const timer = setTimeout(() => {
            executeScriptUser({
                theme,
                title,
                code,
                email,
                open: String(open),
                whatsApp,
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [title, theme, code, email, open, whatsApp]);

    return (
        <>
            <Header />

            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="border p-4 flex flex-col gap-3 rounded-xl">
                            <div>
                                <label className="text-sm text-zinc-800 font-bold p-1">
                                    Título do Widget
                                </label>
                                <Input
                                    maxLength={85}
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title ?? ""}
                                    placeholder="Feedback, Contato, Fale Conosco... "
                                />
                            </div>
                            <div>
                                <label className="text-sm text-zinc-800 font-bold p-1">
                                    E-mail de Destino
                                    <div className="text-sm font-thin p-1">
                                        para qual será enviado os contatos
                                    </div>
                                </label>
                                <Input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder="seuemail@email.com "
                                />
                            </div>
                            <div>
                                <label className="text-sm text-zinc-800 font-bold p-1">
                                    WhatsApp de Destino
                                    <div className="text-sm font-thin p-1">
                                        para qual será enviado os contatos. Se
                                        não quiser ativar deixe, em branco
                                    </div>
                                </label>
                                <Input
                                    placeholder="(ddi+ddd+Telefone)"
                                    onChange={(e) =>
                                        setWhatsApp(e.target.value)
                                    }
                                    value={whatsApp}
                                />
                                <div className="text-sm font-thin p-1">
                                    exemplo: 5511999998888
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-zinc-800 font-bold p-1">
                                    Tema
                                </label>

                                <div className="grid grid-cols-8 md:grid-cols-12  rounded-md justify-between ">
                                    {Array.from({ length: 21 }).map(
                                        (array, index) => (
                                            <Button
                                                key={index}
                                                onClick={() =>
                                                    setTheme(`${index}`)
                                                }
                                                className={`
                                                        h-7 m-2 
                                                        bg-brand-theme${index}
                                                        bg-opacity-100
                                                        focus:ring-2
                                                        focus:ring-offset-2
                                                        hover:bg-brand-theme${index}
                                                        hover:bg-opacity-80
                                                        hover:border-black
                                                `}
                                            >
                                                {index === Number(theme) && (
                                                    <Check
                                                        height={50}
                                                        width={50}
                                                        color="#FFF"
                                                    />
                                                )}
                                            </Button>
                                        )
                                    )}
                                </div>
                            </div>
                            <div>
                                <label className="text-md text-zinc-800 font-bold p-1">
                                    Iniciar aberto?
                                </label>

                                <div className="grid grid-cols-8 md:grid-cols-12  rounded-md justify-between ">
                                    <Button
                                        onClick={() => setOpen(!open)}
                                        className={`
                                                h-8 m-2 
                                                bg-white border-2 text-xl
                                                `}
                                    >
                                        {open && <Check />}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 text-base justify-center text-center">
                            Copie o código abaixo e cole dentro da tag body no
                            HTML do seu site para implantar o Wedget
                            automaticamente
                        </div>
                        <div className="font-mono h-full break-words  w-full border-2 bg-slate-800  text-slate-300 p-3">
                            {createScriptUser({
                                theme,
                                title,
                                email,
                                open: String(open),
                                code,
                                whatsApp,
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
