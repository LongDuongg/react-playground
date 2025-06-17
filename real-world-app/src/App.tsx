import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./provider/provider";

export const App = () => {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Provider>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/" element={<h1>Home</h1>} />
                    </Routes>
                </HashRouter>
            </Provider>
        </QueryClientProvider>
    );
};
