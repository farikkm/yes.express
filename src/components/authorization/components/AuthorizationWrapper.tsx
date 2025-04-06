import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const AuthorizationWrapper = ({ children }: Props) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <motion.div
      className="relative bg-gray-700 py-8 px-12 space-y-5 rounded-2xl"
      initial={{ x: "-20%", opacity: .8 }} 
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <ArrowLeft
        onClick={handleBackClick}
        className="cursor-pointer absolute left-5 top-5"
        color="white"
      />

      <div className="flex justify-center items-center cursor-pointer">
        <img width={70} height={70} src="/icons/logo.png" alt="auth-logo" />
      </div>

      {children}
    </motion.div>
  );
};

export default AuthorizationWrapper;
