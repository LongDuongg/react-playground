export const Setting = () => {
    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>

                        {/* {errors?.value && (
                            <ul className="error-messages">
                                {errors?.value.map((error, i) => (
                                    <li key={i}>{error}</li>
                                ))}
                            </ul>
                        )} */}

                        <form>
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
                        </form>
                        <hr />
                        <button
                            className="btn btn-outline-danger"
                            //onClick={() => auth.logout()}
                        >
                            Or click here to logout.
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
