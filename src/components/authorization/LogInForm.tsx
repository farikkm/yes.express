import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import AuthorizationFormField from "./components/AuthorizationFormField";
import AuthorizationWrapper from "./components/AuthorizationWrapper";
import PhoneForm from "./components/PhoneForm";
import { useState } from "react";

const formSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "At least 2 characters" })
      .max(20, { message: "No more than 20 characters" }),
    surname: z
      .string()
      .min(2, { message: "At least 2 characters" })
      .max(40, { message: "No more than 40 characters" }),
    password: z
      .string()
      .min(5, { message: "At least 5 characters" })
      .max(20, { message: "No more than 20 characters" }),
    confirmPassword: z
      .string()
      .min(5, { message: "At least 5 characters" })
      .max(20, { message: "No more than 20 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

const LogInForm = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: FormValues) => {
    const userInfo = {...values, phone: phoneNumber}
    console.log("Values: ", userInfo);

    const phoneRegex = /^\+998 \d{2} \d{3} \d{2} \d{2}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Неправильный формат номера.");
    } else {
      setError(null);
      navigate("/user/dashboard");
    }
  };

  return (
    <AuthorizationWrapper>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="text-white font-bold text-2xl text-center">Log in</h3>

          <AuthorizationFormField
            control={form.control}
            name="name"
            placeholder="Виктор"
            label="Name"
          />

          <AuthorizationFormField
            control={form.control}
            name="surname"
            placeholder="Цой"
            label="Surname"
          />

          <PhoneForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            error={error}
            setError={setError}
          />

          <AuthorizationFormField
            control={form.control}
            name="password"
            placeholder="1234"
            label="Password"
          />

          <AuthorizationFormField
            control={form.control}
            name="confirmPassword"
            placeholder="1234"
            label="Confirm Password"
          />

          <Button
            type="submit"
            className="w-full bg-gray-100 text-green-700 hover:bg-gray-300"
          >
            Submit
          </Button>
        </form>
      </Form>
    </AuthorizationWrapper>
  );
};

export default LogInForm;
