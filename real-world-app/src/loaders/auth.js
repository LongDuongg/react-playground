export const Auth = ({ guestApis, next }) => {
    return {
        loading: userInfo.loading,
        user: userInfo.value?.user,

        updateUser: (user) => {
            userInfo.onChange({
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
            userInfo.onChange(user);
            document.cookie = "auth_token=" + user.user.token;
        },

        logout: () => {
            userInfo.onChange(null);
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
