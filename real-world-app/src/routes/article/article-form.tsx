import {Form, Input, Button} from "antd";
import {useQuery} from "@tanstack/react-query";
import {useMutation} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";

import {Layout} from "../layout/layout";
import {useApis} from "../../context/apis";
import {QUERY_KEYS} from "../../constant/query-keys";
import {Article, ArticleRes} from "../../types/article";

export const ArticleForm = () => {
  const [form] = Form.useForm();
  const {apis} = useApis();
  const params = useParams();
  const navigate = useNavigate();

  let article = null;

  if (params.slug) {
    article = useQuery({
      queryKey: [QUERY_KEYS.article.bySlug, params.slug],
      queryFn: () => apis.article.getSingleArticle({slug: params.slug}).then((res: any) => res.article),
    });
  } else {
    const fieldNames = ["title", "description", "body", "tagList"];
    article = fieldNames.reduce((acc, name) => {
      acc[name] = "";
      return {data: {article: {...acc}}};
    }, {} as any);
  }

  const mutation = useMutation<ArticleRes>({
    mutationFn: (data) => {
      console.log(data);
      if (params.slug) {
        return apis.article.updateArticle(data);
      } else {
        return apis.article.createArticle(data);
      }
    },
    onSuccess: (data) => {
      navigate(`/article/${data.article.slug}`);
    },
  });

  console.log(mutation.data);

  if (article?.isLoading) {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">Loading....</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              {mutation.data?.errors && (
                <ul className="error-messages">
                  <li>{mutation.data.errors.body}</li>
                </ul>
              )}
              <Form
                form={form}
                name="signup-form"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={article.data?.article}
                onFinish={(value) => {
                  let payload = {
                    ...value,
                    tagList: value.tagList?.split(",").filter((v: string) => v) || [],
                  };
                  mutation.mutate(payload);
                }}
                autoComplete="off"
              >
                <Form.Item name="title">
                  <Input placeholder="Article Title" />
                </Form.Item>

                <Form.Item name="description">
                  <Input placeholder="What's this article about?" />
                </Form.Item>

                <Form.Item name="body">
                  <Input placeholder="Write your article (in markdown)" />
                </Form.Item>

                <Form.Item name="tagList">
                  <Input
                    placeholder="Enter tags"
                    value={article?.value?.tagList?.join(",")}
                    // onChange={(e) => {
                    //   return e.target.value.split(",");
                    // }}
                  />
                </Form.Item>

                <Form.Item label={null}>
                  <Button type="primary" htmlType="submit">
                    {mutation.isPending ? "Publishing..." : "Publish Article"}
                  </Button>
                </Form.Item>
              </Form>
              {/* <fieldset className="form-group">
                                    {(() => {
                                        const { value, onChange } = scope(article, ["tagList"]);
                                        return (
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter tags"
                                                {...bindInput({
                                                    value: value?.join(","),
                                                    onChange: (v) => onChange(v.split(",")),
                                                })}
                                                // value={value ? value.join(",") : ""}
                                                // onChange={(e) =>
                                                //     onChange(e.target.value.split(","))
                                                // }
                                            />
                                        );
                                    })()}

                                    <div className="tag-list">
                                        {article.value?.tagList
                                            ?.filter((v) => v)
                                            .map((tag, i) => (
                                                <span key={i} className="tag-default tag-pill">
                                                    {" "}
                                                    <i
                                                        className="ion-close-round"
                                                        onClick={() => {
                                                            console.log(tag);
                                                            article.onChange({
                                                                ...article.value,
                                                                tagList:
                                                                    article.value.tagList.filter(
                                                                        (v) => v !== tag
                                                                    ),
                                                            });
                                                        }}
                                                    />{" "}
                                                    {tag}{" "}
                                                </span>
                                            ))}
                                    </div>
                                </fieldset> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
