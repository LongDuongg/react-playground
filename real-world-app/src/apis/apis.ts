import { ARTICLES_PER_PAGE } from "../routes/home/article-preview-list.tsx";

const API_HOST = "https://conduit-realworld-example-app.fly.dev";

type Props = {
    onUnauthen: (message: string) => void;
    token: string;
};

type Payload = {
    image: string;
    username: string;
    bio: string;
    email: string;
    password: string;
};

export const createApis = ({ onUnauthen, token }: Props) => {
    const fetcher = createFetcher({ onUnauthen, token });
    return {
        user: {
            // prettier-ignore
            updateUser: async ({ image, username, bio, email, password }: Payload) => await fetcher.put("/user", {
                user: {
                    image,
                    username,
                    bio,
                    email,
                    password,
                },
            }),
        },

        profile: {
            getProfile: async ({ username }: { username: string }) =>
                fetcher.get(`/profiles/${username}`),

            followUser: async ({ username }: { username: string }) =>
                fetcher.post(`/profiles/${username}/follow`),

            unfollowUser: async ({ username }: { username: string }) =>
                fetcher.delete(`/profiles/${username}/follow`),
        },

        article: {
            //prettier-ignore
            getGlobalFeed: ({ page, limit = ARTICLES_PER_PAGE }: { page: number; limit: number }) =>
                fetcher.get(`/articles?limit=${limit}&offset=${page}`),

            // prettier-ignore
            getFeedByTag: ({ tag, page, limit = ARTICLES_PER_PAGE }: { tag: string; page: number; limit: number }) =>
                fetcher.get(`/articles?tag=${tag}&limit=${limit}&offset=${page}`),

            //prettier-ignore
            getMyFeed: async ({ username, page, limit = ARTICLES_PER_PAGE }: { 
                username: string; 
                page: number, 
                limit: number 
            }) => fetcher.get(`/articles?author=${username}&limit=${limit}&offset=${page}`),

            // prettier-ignore
            getFavoritedArticles: async ({ username, page, limit = ARTICLES_PER_PAGE }: { 
                username: string; 
                page: number;
                limit: number; 
            }) => fetcher.get(`/articles?favorited=${username}&limit=${limit}&offset=${page}`),

            getSingleArticle: async ({ slug }: { slug: string }) =>
                fetcher.get(`/articles/${slug}`),

            // prettier-ignore
            createArticle: async ({title, description, body, tagList}: {
                title: string;
                description: string;
                body: string;
                tagList: Array<string>;
            }) => fetcher.post("/articles", {
                article: {
                    title,
                    description,
                    body,
                    tagList,
                },
            }),

            // prettier-ignore
            updateArticle: async ({ slug, title, description, body, tagList }:{
                slug: string;
                title: string;
                description: string;
                body: string;
                tagList: Array<string>;
            }) => fetcher.put(`/articles/${slug}`, {
                article: {
                    slug,
                    title,
                    description,
                    body,
                    tagList,
                }
            }),

            deleteArticle: async ({ slug }: { slug: string }) =>
                fetcher.delete(`/articles/${slug}`),

            likeArticle: async ({ slug }: { slug: string }) =>
                fetcher.post(`/articles/${slug}/favorite`),

            unlikeArticle: async ({ slug }: { slug: string }) =>
                fetcher.delete(`/articles/${slug}/favorite`),

            getComments: async ({ slug }: { slug: string }) =>
                fetcher.get(`/articles/${slug}/comments`),

            commentArticle: async ({ slug, body }: { slug: string; body: string }) =>
                fetcher.post(`/articles/${slug}/comments`, {
                    comment: { body },
                }),

            deleteComment: async ({ slug, id }: { slug: string; id: string }) =>
                fetcher.delete(`/articles/${slug}/comments/${id}`),
        },

        tag: {
            getTags: async () => fetcher.get("/tags"),
        },
    };
};

const createFetcher = ({ onUnauthen, token }: { onUnauthen: any; token: string }) => {
    const makeRequest = (method: string) => {
        return async (url: string, payload: any) => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");

            if (token) {
                headers.append("Authorization", `Token ${token}`);
            }

            const res = await fetch(`${API_HOST}/api${url}`, {
                method,
                headers,
                body: payload ? JSON.stringify(payload) : null,
            });

            const data = await res.json();

            if (res.status === 401) {
                console.log(data);
                onUnauthen?.(data.errors.body[0]);
            }
            return data;
        };
    };
    return {
        get: makeRequest("GET"),
        post: makeRequest("POST"),
        put: makeRequest("PUT"),
        delete: makeRequest("DELETE"),
    };
};
