import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingScreen from "./components/app/LoadingScreen";
import NotFound from "@/pages/NotFound";

const Home = lazy(() => import("@/pages/home/Home"))
const SignIn = lazy(() => import("@/pages/authorization/SignIn"));
const Password = lazy(() => import("@/pages/authorization/Password"));
const Login = lazy(() => import("@/pages/authorization/LogIn"));
const DashboardLayout = lazy(
  () => import("@/layout/user-dashboard/DashboardLayout")
);
const Orders = lazy(() => import("@/pages/user-dashboard/Orders"));
const Profile = lazy(() => import("@/pages/user-dashboard/Profile"));
const PaymentMethods = lazy(
  () => import("@/pages/user-dashboard/PaymentMethods")
);
const Addresses = lazy(() => import("@/pages/user-dashboard/Addresses"));
const Notifications = lazy(
  () => import("@/pages/user-dashboard/Notifications")
);
const Help = lazy(() => import("@/pages/user-dashboard/Help"));
const RestaurantBySlug = lazy(() => import("@/pages/restaurant/RestaurantBySlug"));
// const RestaurantById = lazy(() => import("@/pages/restaurant/RestaurantById"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/welcome" element={<Password />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/restaurant/:id" element={<RestaurantById />} /> */}
          <Route path="/restaurant/:slug" element={<RestaurantBySlug />} />
          <Route path="/user/dashboard/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="payment-methods" element={<PaymentMethods />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="help" element={<Help />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
