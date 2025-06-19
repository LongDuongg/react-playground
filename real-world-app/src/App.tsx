import {HashRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {Login} from "./routes/login/login.tsx";
import {Signup} from "./routes/signup/signup.tsx";
import {Home} from "./routes/home/home.tsx";
import {GuestApiContextProvider} from "./context/apis.tsx";
import {AuthContextProvider} from "./context/auth.tsx";

export const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <GuestApiContextProvider>
        <AuthContextProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
            </Routes>
          </HashRouter>
        </AuthContextProvider>
      </GuestApiContextProvider>
    </QueryClientProvider>
  );
};
