import NavigationBar from "@/components/header/mobile/NavigationBar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MobileLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="pt-14 px-6">
      <Link className="absolute top-4 left-4" to={"/"}>
        <ArrowLeft
          size={40}
          className="arrow-left"
        />
      </Link>
      <h2 className="text-center font-bold text-3xl">{title}</h2>
      <NavigationBar />
      {children}
    </div>
  );
};

export default MobileLayout;
