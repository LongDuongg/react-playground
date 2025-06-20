import {createContext, useContext} from "react";
import {createGuestApis} from "../apis/guest-apis.ts";
import {createApis} from "../apis/apis.ts";
import {useAuth} from "./auth.tsx";

const ApiContext = createContext<any>(null);

export const ApiContextProvider = ({children}: any) => {
  const {user} = useAuth();
  const apis = createApis({
    onUnauthen: (message: string) => {
      // auth.logout();
      // navigate("/login");
      window.alert(message);
    },
    token: user?.token,
  });

  return <ApiContext.Provider value={{apis}}>{children}</ApiContext.Provider>;
};

export const useApis = () => {
  return useContext(ApiContext);
};

const GuestApiContext = createContext<any>(null);

export const GuestApiContextProvider = ({children}: any) => {
  const guestApis = createGuestApis();
  return <GuestApiContext.Provider value={{guestApis}}>{children}</GuestApiContext.Provider>;
};

export const useGuestApis = () => {
  return useContext(GuestApiContext);
};
