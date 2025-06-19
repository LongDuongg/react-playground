const API_HOST = "https://conduit-realworld-example-app.fly.dev";

export const createGuestApis = () => {
  const fetcher = createFetcher();
  return {
    user: {
      // prettier-ignore
      getUser: async ({ authToken } : { authToken: string | undefined}) => {
                const res = await fetcher.get("/user", { authToken });
                if (res.errors) {
                    return null;
                }
                return res;
            },

      // prettier-ignore
      login: ({ email, password }: { email: string; password: string }) => fetcher.post("/users/login", {
                user: {
                    email,
                    password,
                },
            }),

      // prettier-ignore
      signUp: async ({ username, email, password }: { username: string; email: string; password: string }) => {
                return fetcher.post("/users", {
                    user: {
                        username,
                        email,
                        password,
                    },
                });
            },
    },
  };
};

const createFetcher = () => {
  const makeRequest = (method: string, noPayload?: boolean) => {
    return async (url: string, payload: any, options?: any) => {
      if (noPayload) {
        options = payload;
        payload = null;
      }

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      if (options?.authToken) {
        headers.append("Authorization", `Token ${options.authToken}`);
      }

      const res = await fetch(`${API_HOST}/api${url}`, {
        method,
        headers,
        body: payload ? JSON.stringify(payload) : null,
      });

      return await res.json();
    };
  };
  return {
    get: makeRequest("GET", true),
    post: makeRequest("POST"),
    put: makeRequest("PUT"),
    delete: makeRequest("DELETE", true),
  };
};
