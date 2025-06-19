import { HashRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider } from "./provider/provider";
import { Login } from "./routes/login/login.tsx";
import { Signup } from "./routes/signup/signup.tsx";

export const App = () => {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Provider>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Signup />} />
                    </Routes>
                </HashRouter>
            </Provider>
        </QueryClientProvider>
    );
};
