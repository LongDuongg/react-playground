import { ARTICLES_PER_PAGE } from "../routes/home/article-preview-list.tsx";
import { ArticleListPayload, ArticlePayload } from "../types/article.ts";
import { ProfilePayload } from "../types/profile.ts";
import { UpdateUserPayload } from "../types/user.ts";

const API_HOST = "https://conduit-realworld-example-app.fly.dev";

type Props = {
    onUnauthen: (message: string) => void;
    token: string;
};

export const createApis = ({ onUnauthen, token }: Props) => {
    const fetcher = createFetcher({ onUnauthen, token });
    return {
        user: {
            updateUser: async ({ image, username, bio, email, password }: UpdateUserPayload) =>
                await fetcher.put("/user", {
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
            getProfile: async ({ username }: ProfilePayload) =>
                fetcher.get(`/profiles/${username}`),

            followUser: async ({ username }: ProfilePayload) =>
                fetcher.post(`/profiles/${username}/follow`),

            unfollowUser: async ({ username }: ProfilePayload) =>
                fetcher.delete(`/profiles/${username}/follow`),
        },

        article: {
            getGlobalFeed: ({ page, limit = ARTICLES_PER_PAGE }: ArticleListPayload) =>
                fetcher.get(`/articles?limit=${limit}&offset=${page}`),

            getFeedByTag: ({ tag, page, limit = ARTICLES_PER_PAGE }: ArticleListPayload) =>
                fetcher.get(`/articles?tag=${tag}&limit=${limit}&offset=${page}`),

            getMyFeed: ({ username, page, limit = ARTICLES_PER_PAGE }: ArticleListPayload) =>
                fetcher.get(`/articles?author=${username}&limit=${limit}&offset=${page}`),

            getFavoritedArticles: async ({
                username,
                page,
                limit = ARTICLES_PER_PAGE,
            }: ArticleListPayload) =>
                fetcher.get(`/articles?favorited=${username}&limit=${limit}&offset=${page}`),

            getSingleArticle: async ({ slug }: { slug: string }) =>
                fetcher.get(`/articles/${slug}`),

            createArticle: async ({ title, description, body, tagList }: ArticlePayload) =>
                fetcher.post("/articles", {
                    article: {
                        title,
                        description,
                        body,
                        tagList,
                    },
                }),

            updateArticle: async ({ slug, title, description, body, tagList }: ArticlePayload) =>
                fetcher.put(`/articles/${slug}`, {
                    article: {
                        slug,
                        title,
                        description,
                        body,
                        tagList,
                    },
                }),

            deleteArticle: async ({ slug }: ArticlePayload) => fetcher.delete(`/articles/${slug}`),

            likeArticle: async ({ slug }: ArticlePayload) =>
                fetcher.post(`/articles/${slug}/favorite`),

            unlikeArticle: async ({ slug }: ArticlePayload) =>
                fetcher.delete(`/articles/${slug}/favorite`),

            getComments: async ({ slug }: ArticlePayload) =>
                fetcher.get(`/articles/${slug}/comments`),

            commentArticle: async ({ slug, body }: ArticlePayload) =>
                fetcher.post(`/articles/${slug}/comments`, {
                    comment: { body },
                }),

            deleteComment: async ({ slug, id }: ArticlePayload) =>
                fetcher.delete(`/articles/${slug}/comments/${id}`),
        },

        tag: {
            getTags: async () => fetcher.get("/tags"),
        },
    };
};

const createFetcher = ({ onUnauthen, token }: { onUnauthen: any; token: string }) => {
    const makeRequest = (method: string) => {
        return async (url: string, payload?: any) => {
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
