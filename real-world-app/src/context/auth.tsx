import {useQuery, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEYS} from "../constant/query-keys";
import {User} from "../types/user";
import {createContext, useContext} from "react";
import {useGuestApis} from "./apis";

const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({children}: any) => {
  const guestApis = useGuestApis();
  const queryClient = useQueryClient();

  const authToken = getCookie("auth_token");

  if (!authToken) {
    return null;
  }

  const userInfo = useQuery({
    queryKey: [QUERY_KEYS.auth.user],
    queryFn: () => guestApis.user.getUser({authToken}),
  });

  return (
    <AuthContext.Provider
      value={{
        loading: userInfo.isLoading,

        user: userInfo.data,

        updateUser: (user: User) => {
          queryClient.setQueryData([QUERY_KEYS.auth.user], user);
        },

        login: (user: User) => {
          queryClient.setQueryData([QUERY_KEYS.auth.user], user);
          document.cookie = "auth_token=" + user.token;
        },

        logout: () => {
          queryClient.setQueryData([QUERY_KEYS.auth.user], null);
          deleteCookie("auth_token");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

const deleteCookie = (name: string) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

const getCookie = (name: string) => {
  for (const e of document.cookie.split(/;\s*/)) {
    const [n1, value] = e.split("=");
    if (n1 === name) {
      return value;
    }
  }
};
