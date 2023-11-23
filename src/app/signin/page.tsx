"use client";
import { Button, Text, TextField } from "@radix-ui/themes";
import classNames from "classnames";
import { FiUser, FiKey } from "react-icons/fi";

const SignIn = () => {
  return (
    <div
      className={classNames(
        "mx-auto max-w-screen-2xl px-3 flex items-center justify-center h-screen  overflow-hidden",
        "lg:items-baseline lg:justify-start lg:px-14"
      )}
    >
      <div className={classNames("hidden flex-1 relative", "lg:flex")}>
        <div className="absolute h-[1000px] w-[900px] rounded-3xl bg-primary rotate-[56deg] bottom-[-1000px] left-[-700px]"></div>
        <div className="absolute h-[1000px] w-[1000px] rounded-3xl bg-primary/70 bottom-[-900px] rotate-45 left-[-700px]"></div>
        <div className="absolute rotate-90 text-white/80 text-5xl font-semibold left-[-120px] top-[300px]">
          Welcome
        </div>
      </div>
      <div
        className={classNames(
          "w-full h-full flex justify-center items-center",
          "lg:w-[700px] lg:px-28 lg:self-center"
        )}
      >
        <div className="w-full">
          <h1
            className={classNames(
              "text-3xl mb-14 text-center font-semibold text-primary",
              "text-4xl"
            )}
          >
            Sign In
          </h1>
          <div className="flex flex-col gap-y-6 mb-8">
            <div>
              <Text>Email</Text>
              <TextField.Root>
                <TextField.Input size="3" placeholder="Enter your email" />
                <TextField.Slot>
                  <FiUser />
                </TextField.Slot>
              </TextField.Root>
            </div>
            <div>
              <Text>Password</Text>
              <TextField.Root>
                <TextField.Input
                  type="password"
                  placeholder="Enter your password"
                  size="3"
                />
                <TextField.Slot>
                  <FiKey />
                </TextField.Slot>
              </TextField.Root>
            </div>
          </div>
          <div className="flex justify-center mb-16">
            <Button
              size={{
                initial: "3",
                lg: "4",
              }}
              className="bg-primary"
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
