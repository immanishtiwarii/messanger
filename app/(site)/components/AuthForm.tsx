"use client";
import AuthSocialButton from "./AuthSocialButton";
import Input from "../../../app/components/inputs/input";
import Button from "@/app/components/Button/Button";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub,BsGoogle } from "react-icons/bs";
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
                disabled={isLoading}
              />
            )}
            <Input
              error={errors}
              id="email"
              label="Email address"
              register={register}
              disabled={isLoading}
            />
            <Input
              error={errors}
              id="password"
              label="password"
              type="password"
              register={register}
              disabled={isLoading}
            />
            <div>
              <Button disabled={isLoading} fullwidth type="submit">
                {variant === "LOGIN" ? "Sign in" : "Register"}
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm ">
                <span className="bg-white px-2 text-gray-500">
                  or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialActions("github")}
              />
               <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialActions("github")}
              />
            </div>
          </div>
          <div className="flex gap-2 justify-center mt-6 px-2 text-gray-500">
            <div>{variant === 'LOGIN' ? 'New to Messanger?' : 'Already have an account?'}</div>
            <div onClick={toggleVariant} className="underline cursor-pointer">
              {variant === 'LOGIN' ? 'Create an account' : 'Login'}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
