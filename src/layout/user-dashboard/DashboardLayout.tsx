import { Outlet } from "react-router-dom";
import Sidebar from "@/components/user-dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="absolute -z-1 w-full left-0 top-10 flex justify-center">
        <img width={200} height={200} src="/icons/logo.png" alt="dashboard-logo" />
      </div>

      <div className="container mx-auto my-15 px-5 h-full flex justify-center items-center">
        <div className="flex h-[70vh] bg-gray-200 rounded-4xl overflow-hidden grow">
          <Sidebar />
          <div className="flex-1 overflow-auto">
            <main className="p-4 h-full">
              <Outlet /> {/* Здесь будет отрисовываться нужный компонент */}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
