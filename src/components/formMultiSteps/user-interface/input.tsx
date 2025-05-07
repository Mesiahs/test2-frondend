import type { ElementType, ComponentProps, ReactNode } from "react";

import { cn } from "@/utils/utils";

type InputProps<E extends ElementType> = Omit<ComponentProps<E>, "as"> & {
  as?: E;
  children?: ReactNode;
  className?: ReactNode;
};

export default function Input<T extends ElementType>({
  as,
  children,
  className,
  ...props
}: InputProps<T>) {
  const As = as || "div";
  return (
    <As
      className={cn(
        "block w-full rounded-full bg-neutral-100 px-7 py-4 text-left text-base text-black",
        className,
      )}
      {...props}
    >
      {children}
    </As>
  );
}
