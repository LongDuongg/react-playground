import { useState } from "react";

export const Auth = ({ guestApis }) => {
    const authToken = getCookie("auth_token");

    if (!authToken) {
        return null;
    }

    const [userInfo, setUserInfo] = useState({
        loading: false,
        value: guestApis.user.getUser({ authToken }),
    });

    return {
        loading: userInfo.loading,

        user: userInfo.value?.user,

        updateUser: (user) => {
            setUserInfo({
                user: {
                    ...userInfo.value.user,
                    username: user.username,
                    email: user.email,
                    bio: user.bio,
                    image: user.image,
                },
            });
        },

        login: (user) => {
            setUserInfo(user);
            document.cookie = "auth_token=" + user.user.token;
        },

        logout: () => {
            setUserInfo(null);
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
