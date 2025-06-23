import {Form, Input, Button} from "antd";
import {useQuery} from "@tanstack/react-query";
import {useMutation} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";

import {Layout} from "../layout/layout";
import {useApis} from "../../context/apis";
import {QUERY_KEYS} from "../../constant/query-keys";
import {Article, ArticlePayload, ArticleRes} from "../../types/article";
import {useEffect} from "react";

export const ArticleForm = () => {
  const [form] = Form.useForm();
  const {apis} = useApis();
  const params = useParams();
  const navigate = useNavigate();

  const article = useQuery({
    queryKey: [QUERY_KEYS.article.bySlug, params.slug],
    queryFn: () => apis.article.getSingleArticle({slug: params.slug}),
    enabled: Boolean(params.slug),
  });

  const mutation = useMutation<ArticleRes, unknown, ArticlePayload>({
    mutationFn: (data: ArticlePayload) => {
      console.log(data);
      if (params.slug) {
        return apis.article.updateArticle({...data, slug: params.slug});
      } else {
        return apis.article.createArticle(data);
      }
    },
    onSuccess: (data) => {
      navigate(`/article/${data.article.slug}`);
    },
  });
  console.log(Form.useWatch("tagList", form));

  // console.log(article.data.article);
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
  // useEffect(() => {
  //   if (article.data.article) {
  //     form.setFieldsValue(article.data.article);
  //   }
  // }, [article]);

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {mutation.data?.errors && (
              <ul className="error-messages">
                <li>{mutation.data.errors.body[0]}</li>
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
                mutation.mutate(value);
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
                  value={form.getFieldValue("tagList")?.join(",")}
                  onChange={(e) => {
                    form.setFieldsValue({tagList: e.target.value.split(",")});
                  }}
                />
              </Form.Item>
              <div className="tag-list">
                {form
                  .getFieldValue("tagList")
                  ?.filter((v: string) => v)
                  .map((tag: string, i: number) => (
                    <span key={i} className="tag-default tag-pill">
                      {" "}
                      <i
                        className="ion-close-round"
                        onClick={() => {
                          console.log(tag);
                          form.setFieldsValue({
                            tagList: form.getFieldValue("tagList").filter((v: string) => v !== tag),
                          });
                        }}
                      />{" "}
                      {tag}{" "}
                    </span>
                  ))}
              </div>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  {mutation.isPending ? "Publishing..." : "Publish Article"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
