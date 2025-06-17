import { useState, createContext } from "react";
import { createGuestApis } from "../apis/guest-apis,js";
import { createApis } from "../apis/apis,js";
import { Auth } from "../loaders/auth.js";

const context = createContext({});

export const Provider = ({ children }: any) => {
    const guestApis = createGuestApis();

    const auth = Auth({ guestApis });

    const apis = createApis({
        onUnauthen: (message: string) => {
            // auth.logout();
            // navigate("/login");
            window.alert(message);
        },
        token: auth.user?.token,
    });

    return <context.Provider value={{ auth, guestApis, apis }}>{children}</context.Provider>;
};
