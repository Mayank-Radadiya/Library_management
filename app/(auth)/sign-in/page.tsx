"use client";
import AuthForm from "@/components/global/AuthForm/AuthForm";
import { signInSchema } from "@/lib/validation";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={async () => {
        console.log("submit");
        return { success: true };
      }}
    />
  );
};

export default Page;
