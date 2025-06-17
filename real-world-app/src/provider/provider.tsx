import { useState, createContext } from "react";
import { createGuestApis } from "../apis/guest-apis.ts";
import { createApis } from "../apis/apis.ts";
import { Auth } from "../loaders/auth.ts";

export const context = createContext({});

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
