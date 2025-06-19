import { createContext, useContext } from "react";
import { createGuestApis } from "../apis/guest-apis.ts";
import { createApis } from "../apis/apis.ts";
import { Auth } from "../loaders/auth.ts";

interface ContextType {
    auth: ReturnType<typeof Auth>;
    guestApis: ReturnType<typeof createGuestApis>;
    apis: ReturnType<typeof createApis>;
}

const context = createContext<ContextType | null>(null);

export const Provider = ({ children }: any) => {
    const guestApis = createGuestApis();

    const auth = Auth({ guestApis });

    const apis = createApis({
        onUnauthen: (message: string) => {
            // auth.logout();
            // navigate("/login");
            window.alert(message);
        },
        token: auth?.user?.token,
    });

    return <context.Provider value={{ auth, guestApis, apis }}>{children}</context.Provider>;
};

export const consumeContext = (): ContextType => {
    const ctx = useContext(context);
    if (!ctx) {
        throw new Error("Provider context is missing");
    }
    return ctx;
};
