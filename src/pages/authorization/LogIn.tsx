import authImg from "@/assets/images/auth-bg.jpg";
import LogInForm from "@/components/authorization/LogInForm";

const Login = () => {
  return (
    <>
      <div className="w-full h-full absolute top-0 left-0 -z-1 flex justify-center items-center">
        <img className="" src={authImg} alt="auth-bg" />
      </div>

      <div className="flex items-center justify-center min-h-screen px-5">
        <LogInForm />
      </div>
    </>
  );
};

export default Login;
