import { Link, useNavigate } from "react-router-dom";

import AuthorizationWrapper from "./components/AuthorizationWrapper";
import { useState } from "react";
import { Button } from "../ui/button";
import PhoneForm from "./components/PhoneForm";

const SignInForm = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneRegex = /^\+998 \d{2} \d{3} \d{2} \d{2}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Неправильный формат номера.");
    } else {
      setError(null);
      navigate("/welcome", { state: { phone: phoneNumber } });
    }
  };

  return (
    <AuthorizationWrapper>
      <form onSubmit={handleSubmit} className="space-y-2" action="#">
        <PhoneForm
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          error={error}
          setError={setError}
        />
        <Button
          type="submit"
          className="w-full bg-gray-100 text-green-700 hover:bg-gray-300"
          disabled={!!error}
        >
          Submit
        </Button>
      </form>

      <div className="authorization_text_color *:text-sm flex sm:flex-row flex-col *:max-sm:text-center gap-1">
        <span>У вас нет аккаунта?</span>
        <Link to="/login" className="underline">
          Зарегистрироваться
        </Link>
      </div>
    </AuthorizationWrapper>
  );
};

export default SignInForm;
