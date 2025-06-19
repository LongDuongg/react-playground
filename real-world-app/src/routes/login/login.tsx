import { Form, Input, Button } from "antd";
import { useMutation } from "@tanstack/react-query";

import { consumeContext } from "../../provider/provider.tsx";

type Fields = {
    email: string;
    password: string;
};

export const Login = () => {
    const { guestApis } = consumeContext();

    const mutation = useMutation({
        mutationFn: guestApis.user.login,
    });

    if (mutation.isSuccess) {
        document.cookie = "auth_token=" + mutation.data.user.token;
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <a href="/register">Need an account?</a>
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
                                name="email"
                                rules={[{ required: true, message: "Please input your email!" }]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>

                            <Form.Item<Fields>
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}
                            >
                                <Input.Password placeholder="Password" />
                            </Form.Item>

                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit">
                                    {mutation.isPending ? "Loading..." : "Sign in"}
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};
