import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: keyof typeof BUTTON_VARIANTS;
}

const BUTTON_VARIANTS = {
  primary:
    "text-white bg-primary hover:bg-primary-2 hover:text-white cursor-pointer",
  inactive: "text-white bg-secondary cursor-not-allowed",
};

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      className={twMerge(
        `flex justify-center items-center whitespace-nowrap font-bebasneue text-2xl h-[56px] outline-none`,
        BUTTON_VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
