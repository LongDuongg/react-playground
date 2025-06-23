import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {Login} from "./routes/login/login.tsx";
import {Signup} from "./routes/signup/signup.tsx";
import {Home} from "./routes/home/home.tsx";
import {ApiContextProvider, GuestApiContextProvider} from "./context/apis.tsx";
import {AuthContextProvider, useAuth} from "./context/auth.tsx";
import {Setting} from "./routes/setting/setting.tsx";
import {ArticleForm} from "./routes/article/article-form.tsx";
import {Article} from "./routes/article/article.tsx";
import {Profile} from "./routes/profile/profile.tsx";
import Layout from "antd/es/layout/layout";

type Route = {
  path: string;
  component: any;
  require?: "Auth" | "Unauth";
};

const ROUTES: Route[] = [
  {path: "/", component: Home},
  {path: "/login", component: Login, require: "Unauth"},
  {path: "/register", component: Signup, require: "Unauth"},
  {path: "/settings", component: Setting, require: "Auth"},
  {path: "/editor", component: ArticleForm, require: "Auth"},
  {path: "/editor/:slug", component: ArticleForm, require: "Auth"},
  {path: "/article/:slug", component: Article, require: "Auth"},
  {path: "/profile/:username", component: Profile, require: "Auth"},
  {path: "/profile/:username/favorite", component: Profile, require: "Auth"},
];

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GuestApiContextProvider>
        <AuthContextProvider>
          <ApiContextProvider>
            <HashRouter>
              <Routes>
                {ROUTES.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <RouteProtection require={route.require}>
                        <route.component />
                      </RouteProtection>
                    }
                  />
                ))}
              </Routes>
            </HashRouter>
          </ApiContextProvider>
        </AuthContextProvider>
      </GuestApiContextProvider>
    </QueryClientProvider>
  );
};

const RouteProtection = ({children, require}: {children: any; require: Route["require"]}) => {
  const {loading, user} = useAuth();

  if (loading) {
    return "Loading...";
  }

  if (require === "Auth") {
    if (user) {
      return children;
    }
    return <Navigate to="/login" />;
  }

  if (require === "Unauth") {
    if (!user) {
      return children;
    }
    return <Navigate to="/" />;
  }

  return children;
};
