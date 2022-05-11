import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { WidgetPage } from "./pages/WidgetPage";

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/widget" element={<WidgetPage />} />
            </Routes>
        </BrowserRouter>
    );
}
