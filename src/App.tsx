import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingScreen from "./components/app/LoadingScreen";
import NotFound from "@/pages/NotFound";
import Dashboard from "./pages/user-dashboard/Dashboard";
import Home from "./pages/home/Home";

const SignIn = lazy(() => import("@/pages/authorization/SignIn"));
const Password = lazy(() => import("@/pages/authorization/Password"));
const Login = lazy(() => import("@/pages/authorization/LogIn"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/welcome" element={<Password />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
