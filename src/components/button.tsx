import { ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "outlined";
}

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const button = tv({
    base: "p-4 flex items-center w-full justify-center rounded-md uppercase font-semibold",
    variants: {
      color: {
        primary: "bg-brand-yellow text-black border-2 border-brand-yellow",
        outlined:
          "bg-transparent border-2 border-brand-lightGrey text-black border-opacity-50",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  });

  return (
    <button className={button({ color: variant })} {...props}>
      {children}
    </button>
  );
};

export default Button;
