import { useId } from "react";
import { Radio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

import { cn } from "@/utils/utils";

import Field from "../user-interface/field";
import Input from "../user-interface/input";

interface RadioGroupProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  direction: "x" | "y";
  error: { message: string } | undefined;
}

export default function RadioGroup({
  label,
  value,
  onChange,
  options,
  direction,
  error,
}: RadioGroupProps) {
  const id = useId();
  return (
    <Field id={id} label={label} error={error}>
      <HeadlessRadioGroup
        value={value}
        onChange={onChange}
        className={cn("peer grid grid-cols-1 gap-4", {
          "grid-cols-[repeat(auto-fit,minmax(theme(spacing.40),1fr))]":
            direction === "x",
        })}
      >
        {options.map((option) => (
          <Input
            key={option.value}
            as={Radio}
            value={option.value}
            className={cn(
              "group flex cursor-pointer items-center gap-2 focus:outline-none data-[checked]:border-neutral-500",
              { "border-red-500 data-[checked]:border-red-500": error },
            )}
          >
            {option.label}
            <CheckIcon className="pointer-events-none ml-auto size-5 fill-white/50 group-data-[checked]:fill-green-500/100" />
          </Input>
        ))}
      </HeadlessRadioGroup>
    </Field>
  );
}
