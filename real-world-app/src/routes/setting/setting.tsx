import {Input, Form, Button} from "antd";
import {useMutation} from "@tanstack/react-query";
import {omit, isEqual} from "lodash";

import {useApis} from "../../context/apis";
import {useAuth} from "../../context/auth";
import {Layout} from "../layout/layout";

import {UserRes} from "../../types/user";

export const Setting = () => {
  const getFieldValue = (fieldName: string, form: any) => {
    return Form.useWatch(fieldName, form);
  };

  const fieldNames = ["image", "username", "bio", "email", "password"];

  const [form] = Form.useForm();
  const {user, updateUser, logout} = useAuth();
  const {apis} = useApis();

  const oriValue = {...omit(user, ["token"]), password: ""};

  const mutation = useMutation<UserRes>({
    mutationFn: apis.user.updateUser,
    onSuccess: (data) => {
      updateUser(data.user);
      form.setFieldsValue(oriValue);
    },
  });

  const formValues = {...fieldNames.map((name) => getFieldValue(name, form))};
  console.log(formValues);

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

              {/* <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="URL of profile picture"
                      // {...bindInput(scope(state, ["image"]))}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Your Name"
                      // {...bindInput(scope(state, ["username"]))}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      rows="8"
                      placeholder="Short bio about you"
                      // {...bindInput(scope(state, ["bio"]))}
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                      // {...bindInput(scope(state, ["email"]))}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="New Password"
                      // {...bindInput(scope(state, ["password"]))}
                    />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    // disabled={equalDeep(oriValue, state?.value)}
                    // onClick={async (e) => {
                    //     e.preventDefault();

                    //     const res = await apis.user.updateUser(state?.value);

                    //     if (res.errors) {
                    //         errors.onChange(res.errors.body);
                    //     } else {
                    //         auth.updateUser(res.user);
                    //         state.onChange({
                    //             ...omit(res.user, ["token"]),
                    //             password: "",
                    //         });
                    //     }
                    // }}
                  >
                    Update Settings
                  </button>
                </fieldset>
              </form> */}
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
