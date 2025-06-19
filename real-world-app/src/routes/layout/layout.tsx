import { NavLink } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { consumeContext } from "../../provider/provider";
import { deleteCookie, getCookie } from "../../loaders/auth";
import { useState } from "react";

export const Layout = ({ children }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const { guestApis } = consumeContext();

    const userInfo = useQuery({
        queryKey: ["user"],
        queryFn: () => guestApis.user.getUser({ authToken: getCookie("auth_token") }),
    });

    const navLinks = getNavLinks(userInfo?.data);

    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        conduit
                    </a>
                    <ul className="nav navbar-nav pull-xs-left">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://github.com/TonyMckes/conduit-realworld-example-app"
                            >
                                <i className="ion-social-github"></i> Source code
                            </a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav pull-xs-right">
                        {navLinks.map(({ to, label }) => (
                            <li className="nav-item" key={to}>
                                <NavLink className="nav-link" to={to}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}

                        {userInfo.data?.user && (
                            <li className="nav-item dropdown">
                                <div
                                    className="nav-link dropdown-toggle cursor-pointer"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    <img
                                        alt="pbl"
                                        className="user-pic"
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCACAAIABAREA/8QAHAABAAEFAQEAAAAAAAAAAAAAAAYBBAUHCAMC/8QANBAAAQQBAgQEBgEBCQAAAAAAAQACAwQFBhEHITFBCBJRYRMUcYGRoVIjFSJEYnJzgpKy/9oACAEBAAA/AJwiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi+69eW3YZBXiksWJOTIYWF73fQDmVKo+EmtpoPit0tkvJtvzjDT/wBSd/0o1kcbcxFt1W/Uno2m9YbMZjf9dirdERXmJwuQz9r5bGULORsDrHViMhH126fdZ+zwn1pTgM0ulskIwNyWxB5A+jST+lFXsdFK+KRjo5WHZ8b2lrmn0IPMKiIiLM6P0rd1tqOlhseAJ7Lucjhu2Jg5ue72A/J2Hddg6W0bprhJp+WSD4NOOJnmt5S24CST3c89B6NHL0Cjk/iU0NDcMIt3pmb7fMx03GP689iR9lI8yzR/E/R0tm7Yp5LBhjnm6HhprbDm4O6xuHvt7hcUTCMTyiF7pIQ9wje4bFzNz5SR2JGxXwivsFBRtZzHQ5Od1XGyWI2Wp2dY4i4Bzh6cu/bqu0pcjpPhRpiH+tTwuIA/pCPmZjt1AG7pHH15qMY/xI6Hu3BC67bpAnYT2qrmx/cjfYe5WY19w0wHFPDtlf8ABbcdH5qmXrbOcNxy3I5PYfQ/bYrjzOYS5pvM3MVkIvg3akpilaOm46EeoI2IPoVYoiLMaS1bk9E5yHLYmZsNqMFhD2+ZkjD1Y4dwdh+As7xF4tZviYKsWRbBUpVj52U6nmDHP/m7ckuI7eihSqHODHsDnBj9vO0OIDtum47/AHVERFVznODA5znBg8rA5xPlHoN+g+iop7w+40Z/hzjJ8dRZWu0XuL44LgcRA89SzYjkepb0358tyoln89f1RmbWVyc5s3rLvNJJtsOQ2AA7AAAAeyx6IiIiIiIiIiIiIi2Dwj4Rz8ULVyR93+z8ZTLWSzMaHyOe4bhrQeXTmSfZWPE3hblOGmT8lkG3ipnbVsi1uzX/AOV/8X+3ft7QxERbK4ScFrvEWUXrpmx2nmf4loAksO/jFuNtvV223Yb9sfxd4Yu4Y56vWjt/O0Lkbpa0jwBIA0gOa8DluNxzHXf2UFRERERSnh5xFynDfNfO0CJq0uzbVKR2zJ2j/wAuHPZ3b3C6x0prbTXFjByxVjDcZIzy2sXcYDJH7PYeo9HDce615qzwtYrISPn09kpMQ93P5Sy0zQD2ad/M0fcrX9zwy61rSEQjG3G9nR2vL+nNC9cd4YNYW3j5qfGY9ndz53SkfZref5WzdG+GfT2Bljs5iaTUNppBEUrPh1gf9sEl3/IkeykfEXi9geGtP5dzmXMqGAQYusQC0dvPtyjb+/QFclas1Zk9bZyfLZaf41qX+6Gt5MiYOjGDs0fvqeaxCIiIiIvWpbnoWo7NWeWrZiO8c8Dyx7D7OHMLaWm/Erq7CRsivCrnYW8t7TPhzbf62dfuCppW8WdQxj5nS9lsnf4Ftjm/sBed7xaR/DIo6XkL/W1cAH4a0qAao8QWstSxvhjuRYas7kY8awseR7yEl342WuHEue57iXPcfM5zjuXH1JPUqiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIv/9k="
                                    />
                                    {userInfo.data?.username}
                                </div>
                                <div
                                    className="dropdown-menu"
                                    style={{ display: isOpen ? "block" : "none" }}
                                >
                                    <NavLink
                                        className="dropdown-item"
                                        to={`/profile/${userInfo.data?.username}`}
                                    >
                                        <i className="ion-person"></i> Profile
                                    </NavLink>
                                    <NavLink className="dropdown-item" to="/settings">
                                        <i className="ion-gear-a"></i> Settings
                                    </NavLink>
                                    <div className="dropdown-divider"></div>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => {
                                            deleteCookie("auth_token");
                                        }}
                                    >
                                        <i className="ion-log-out"></i> Logout
                                    </button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

            {children}

            <footer>
                <div className="container">
                    <a href="/" className="logo-font">
                        conduit
                    </a>
                    <span className="attribution">
                        An interactive learning project from{" "}
                        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
                        under MIT.
                    </span>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://github.com/TonyMckes/conduit-realworld-example-app"
                            >
                                <i className="ion-social-github"></i> Source code
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

const getNavLinks = (auth: any) => {
    let links = [
        {
            to: "/",
            label: (
                <>
                    <i className="ion-compose" />
                    &nbsp;Home
                </>
            ),
        },
    ];

    if (!auth?.user) {
        const unauthNavLinks = [
            {
                to: "/login",
                label: (
                    <>
                        <i className="ion-log-in"></i>&nbsp;Login
                    </>
                ),
            },
            {
                to: "/register",
                label: (
                    <>
                        <i className="ion-log-in"></i>&nbsp;Signup
                    </>
                ),
            },
        ];
        links.push(...unauthNavLinks);
    } else {
        const authNavLinks = [
            {
                to: "/editor",
                label: (
                    <>
                        <i className="ion-compose"></i>&nbsp;New Article
                    </>
                ),
            },
        ];
        links.push(...authNavLinks);
    }
    return links;
};
