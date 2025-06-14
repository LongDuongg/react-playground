export const Login = () => {
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <a href="/register">Need an account?</a>
                        </p>

                        {/* {errors?.value && (
                            <ul className="error-messages">
                                {errors?.value.map((error, i) => (
                                    <li key={i}>{error}</li>
                                ))}
                            </ul>
                        )} */}

                        <form>
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
                                    placeholder="Password"
                                    // {...bindInput(scope(state, ["password"]))}
                                />
                            </fieldset>
                            <button
                                className="btn btn-lg btn-primary pull-xs-right"
                                // onClick={async (e) => {
                                //     e.preventDefault();
                                //     isLoading.onChange(true);
                                //     const user = await guestApis.user.login(state?.value);
                                //     if (user.errors) {
                                //         errors.onChange(user.errors.body);
                                //         isLoading.onChange(false);
                                //     } else {
                                //         auth.login(user);
                                //     }
                                // }}
                            >
                                {/* {isLoading.value ? "Loading..." : "Sign in"} */}
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
