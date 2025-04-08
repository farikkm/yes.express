import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import AuthorizationFormField from "./components/AuthorizationFormField";
import AuthorizationWrapper from "./components/AuthorizationWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

const formSchema = z.object({
  password: z
    .string()
    .min(5, { message: "At least 5 characters" })
    .max(20, { message: "No more than 20 characters" }),
});

const PasswordForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [singInInfo, setSignInInfo] = useState("");

  useEffect(() => {
    if (location.state) {
      setSignInInfo(
        location.state.email ? location.state.email : location.state.phone
      );
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    navigate("/")
  }

  return (
    <AuthorizationWrapper>
      {singInInfo ? (
        <>
          <div className="rounded-2xl bg-gray-600 md:h-[50px] h-[40px] flex justify-center items-center gap-5 border border-gray-400 mt-6">
            <User color="#e5e7eb" />
            <span className="authorization_text_color">{singInInfo}</span>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <h3 className="text-white font-bold text-2xl text-center">
                Password
              </h3>

              <AuthorizationFormField
                control={form.control}
                name="password"
                placeholder="1234"
                label="Password"
              />

              <Button
                type="submit"
                className="w-full bg-gray-100 text-green-700 hover:bg-gray-300"
              >
                Submit
              </Button>
            </form>
          </Form>
        </>
      ): (
        <span className="authorization_text_color">Вернитесь на поле регистрации</span>
      )}
    </AuthorizationWrapper>
  );
};

export default PasswordForm;
