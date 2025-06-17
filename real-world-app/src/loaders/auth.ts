import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const Auth = ({ guestApis }) => {
    const queryClient = useQueryClient();

    const authToken = getCookie("auth_token");

    if (!authToken) {
        return null;
    }

    const userInfo = useQuery({
        queryKey: ["user"],
        queryFn: () => guestApis.user.getUser({ authToken }),
        // onSuccess: (data) => queryClient.setQueryData(["user", authToken], data),
    });

    return {
        loading: userInfo.isLoading,

        user: userInfo.data,

        updateUser: (user) => {
            setUserInfo({
                ...userInfo,
                value: {
                    user: {
                        ...userInfo.value.user,
                        username: user.username,
                        email: user.email,
                        bio: user.bio,
                        image: user.image,
                    },
                },
            });
        },

        login: (user) => {
            setUserInfo({ ...userInfo, value: user });
            document.cookie = "auth_token=" + user.user.token;
        },

        logout: () => {
            setUserInfo({ ...userInfo, value: null });
            deleteCookie("auth_token");
        },
    };
};

const deleteCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

const getCookie = (name) => {
    for (const e of document.cookie.split(/;\s*/)) {
        const [n1, value] = e.split("=");
        if (n1 === name) {
            return value;
        }
    }
};
