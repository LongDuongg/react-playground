import { Form, Input, Button } from "antd";
import { useMutation } from "@tanstack/react-query";

import { consumeContext } from "../../provider/provider.tsx";
import { Layout } from "../layout/layout.tsx";

type Fields = {
    username: string;
    email: string;
    password: string;
};

export const Signup = () => {
    const { guestApis } = consumeContext();

    const mutation = useMutation({
        mutationFn: guestApis.user.signUp,
    });

    if (mutation.isSuccess) {
        document.cookie = "auth_token=" + mutation.data.user.token;
    }

    return (
        <Layout>
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign up</h1>
                            <p className="text-xs-center">
                                <a href="/login">Have an account?</a>
                            </p>

                            {mutation.data?.errors && (
                                <ul className="error-messages">
                                    <li>{mutation.data.errors.body}</li>
                                </ul>
                            )}

                            <Form
                                name="signup-form"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                onFinish={(value: any) => {
                                    mutation.mutate(value);
                                }}
                                // onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item<Fields>
                                    name="username"
                                    rules={[
                                        { required: true, message: "Please input your username!" },
                                    ]}
                                >
                                    <Input placeholder="Username" />
                                </Form.Item>

                                <Form.Item<Fields>
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please input your email!" },
                                    ]}
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>

                                <Form.Item<Fields>
                                    name="password"
                                    rules={[
                                        { required: true, message: "Please input your password!" },
                                    ]}
                                >
                                    <Input.Password placeholder="Password" />
                                </Form.Item>

                                <Form.Item label={null}>
                                    <Button type="primary" htmlType="submit">
                                        {mutation.isPending ? "Loading..." : "Sign up"}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
