export const Signup = () => {
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <a href="/login">Have an account?</a>
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
                                    placeholder="Username"
                                    // {...bindInput(scope(state, ["username"]))}
                                />
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
                                    placeholder="Password"
                                    // {...bindInput(scope(state, ["password"]))}
                                />
                            </fieldset>
                            <button
                                className="btn btn-lg btn-primary pull-xs-right"
                                // onClick={async (e) => {
                                //     e.preventDefault();
                                //     isLoading.onChange(true);
                                //     const registerData = await guestApis.user.signUp(state?.value);
                                //     if (registerData.errors) {
                                //         console.error(registerData.errors);
                                //         errors.onChange(registerData.errors.body);
                                //         isLoading.onChange(false);
                                //     } else {
                                //         auth.login(registerData);
                                //     }
                                // }}
                            >
                                {/* {isLoading.value ? "Loading..." : "Sign up"} */}
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
