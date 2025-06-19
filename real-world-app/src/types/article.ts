export type ArticlePayload = {
    id?: string;
    slug?: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
};

export type ArticleListPayload = {
    tag?: string;
    page: number;
    limit: number;
    username?: string;
};
