import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {Login} from "./routes/login/login.tsx";
import {Signup} from "./routes/signup/signup.tsx";
import {Home} from "./routes/home/home.tsx";
import {GuestApiContextProvider} from "./context/apis.tsx";
import {AuthContextProvider, useAuth} from "./context/auth.tsx";
import {RouteProtector} from "./types/route-protector.ts";
import {Setting} from "./routes/setting/setting.tsx";
import {ArticleForm} from "./routes/article/article-form.tsx";
import {Article} from "./routes/article/article.tsx";
import {Profile} from "./routes/profile/profile.tsx";

export const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <GuestApiContextProvider>
        <AuthContextProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<RouteProtection children={<Login />} requireUnauth />} />
              <Route path="/register" element={<RouteProtection children={<Signup />} requireUnauth />} />
              <Route path="/settings" element={<RouteProtection children={<Setting />} requireAuth />} />
              <Route path="/editor" element={<RouteProtection children={<ArticleForm />} requireAuth />} />
              <Route path="/editor/:slug" element={<RouteProtection children={<ArticleForm />} requireAuth />} />
              <Route path="/article/:slug" element={<RouteProtection children={<Article />} requireAuth />} />
              <Route path="/profile/:username" element={<RouteProtection children={<Profile />} requireAuth />} />
              <Route path="/profile/:username/favorite" element={<RouteProtection children={<Profile />} requireAuth />} />
            </Routes>
          </HashRouter>
        </AuthContextProvider>
      </GuestApiContextProvider>
    </QueryClientProvider>
  );
};

const RouteProtection = ({children, requireAuth, requireUnauth}: RouteProtector) => {
  const {loading, user} = useAuth();

  if (loading) {
    return "Loading...";
  }

  if (requireAuth) {
    if (user) {
      return children;
    }
    return <Navigate to="/login" />;
  }

  if (requireUnauth) {
    if (!user) {
      return children;
    }
    return <Navigate to="/" />;
  }
};
