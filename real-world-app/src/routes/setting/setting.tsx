import {useMutation} from "@tanstack/react-query";
import {useApis} from "../../context/apis";
import {useAuth} from "../../context/auth";
import {Layout} from "../layout/layout";
import {UserRes} from "../../types/user";
import {Input, Form, Button} from "antd";

export const Setting = () => {
  const {user, updateUser, logout} = useAuth();
  const {apis} = useApis();

  const mutation = useMutation<UserRes>({
    mutationFn: apis.user.updateUser,
    onSuccess: (data) => {
      updateUser(data.user);
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
                name="setting-form"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                onFinish={(value) => {
                  mutation.mutate(value);
                }}
                autoComplete="off"
              >
                <Form.Item name="image">
                  <Input placeholder="image" />
                </Form.Item>

                <Form.Item name="username">
                  <Input placeholder="username" />
                </Form.Item>

                <Form.Item name="bio">
                  <Input placeholder="bio" />
                </Form.Item>

                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item name="password">
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item label={null}>
                  <Button type="primary" htmlType="submit">
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
