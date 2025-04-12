import { Outlet } from "react-router-dom";
import Sidebar from "@/components/user-dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="absolute -z-1 w-full left-0 top-10 flex justify-center">
        <img width={200} height={200} src="/icons/logo.png" alt="dashboard-logo" />
      </div>

      <div className="md:container md:mx-auto md:my-15 md:px-5 h-full flex justify-center items-center">
        <div className="flex md:h-[70vh] h-screen bg-gray-200 md:rounded-4xl overflow-hidden grow">
          <Sidebar />
          <div className="flex-1 p-4 overflow-y-scroll max-md:mb-16">
              <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
