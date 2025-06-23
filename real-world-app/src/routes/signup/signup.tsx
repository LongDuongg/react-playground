import {Form, Input, Button} from "antd";
import {useMutation} from "@tanstack/react-query";

import {Layout} from "../layout/layout.tsx";
import {useGuestApis} from "../../context/apis.tsx";
import {useAuth} from "../../context/auth.tsx";
import {UserRes} from "../../types/user.ts";

export const Signup = () => {
  const {guestApis} = useGuestApis();
  const {login} = useAuth();

  const mutation = useMutation<UserRes>({
    mutationFn: guestApis.user.signUp,
    onSuccess(data) {
      login(data.user);
    },
  });

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
                  <li>{mutation.data.errors.body[0]}</li>
                </ul>
              )}

              <Form
                name="signup-form"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                onFinish={(value: any) => {
                  mutation.mutate(value);
                }}
                autoComplete="off"
              >
                <Form.Item name="username" rules={[{required: true, message: "Please input your username!"}]}>
                  <Input placeholder="Username" />
                </Form.Item>

                <Form.Item name="email" rules={[{required: true, message: "Please input your email!"}]}>
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item name="password" rules={[{required: true, message: "Please input your password!"}]}>
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" disabled={mutation.isPending}>
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
