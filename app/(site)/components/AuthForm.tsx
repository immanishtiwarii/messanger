"use client";
import Input from "../../../app/components/inputs/input";
import Button from "@/app/components/Button/Button";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      // axios
    }

    if (variant === "LOGIN") {
      // nextAuth signin
    }
  };

  const socialActions = (action: string) => {
    setIsLoading(true);
    // next auth social signin
  };
  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {variant === "REGISTER" && (
              <Input
                error={errors}
                id="name"
                label="Name"
                register={register}
              />
            )}
            <Input
              error={errors}
              id="email"
              label="Email address"
              register={register}
            />
            <Input
              error={errors}
              id="password"
              label="password"
              type="password"
              register={register}
            />
            <div>
              <Button>Test</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
