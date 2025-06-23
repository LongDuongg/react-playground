import {Input, Form, Button} from "antd";
import {useMutation} from "@tanstack/react-query";
import {omit, isEqual} from "lodash";

import {useApis} from "../../context/apis";
import {useAuth} from "../../context/auth";
import {Layout} from "../layout/layout";

import {UserRes} from "../../types/user";

export const Setting = () => {
  const [form] = Form.useForm();
  const {user, updateUser, logout} = useAuth();
  const {apis} = useApis();

  const oriValue = {...omit(user, ["token"]), password: ""};

  const formValues = Form.useWatch([], form);

  console.log(formValues);

  const mutation = useMutation<UserRes>({
    mutationFn: apis.user.updateUser,
    onSuccess: (data) => {
      updateUser(data.user);
      // reset password and remove token
      form.setFieldsValue({...omit(data.user, ["token"]), password: ""});
    },
  });

  return (
    <Layout>
      <div className="settings-page">
        <div className="container page">
          .
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>

              {mutation.data?.errors && (
                <ul className="error-messages">
                  <li>{mutation.data.errors.body}</li>
                </ul>
              )}

              <Form
                form={form}
                name="setting-form"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={oriValue}
                onFinish={(value) => {
                  mutation.mutate(value);
                }}
                autoComplete="off"
              >
                <Form.Item name="image">
                  <Input placeholder="Image" />
                </Form.Item>

                <Form.Item name="username">
                  <Input placeholder="Username" />
                </Form.Item>

                <Form.Item name="bio">
                  <Input.TextArea placeholder="Bio" />
                </Form.Item>

                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item name="password">
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item label={null}>
                  <Button type="primary" htmlType="submit" disabled={isEqual(oriValue, formValues)}>
                    Update Settings
                  </Button>
                </Form.Item>
              </Form>

              <hr />
              <button className="btn btn-outline-danger" onClick={() => logout()}>
                Or click here to logout.
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
