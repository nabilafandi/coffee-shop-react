/* eslint-disable react/prop-types */
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";

export const VariantSelector = ({
  variants,
  selectedVariant,
  onVariantChange,
}) => (
  <div className="inline-block w-auto">
    <h3 className="text-sm font-bold">Choose a variant:</h3>
    <div className="mt-2 inline-grid grid-cols-2 gap-2 w-max">
      {variants?.map((variant) => (
        <div key={variant.id}>
          <p>{variant.name}</p>
          <RadioGroup
            value={selectedVariant?.[variant.id] || null}
            onChange={(valueId) => {
              const newSelectedVariant = {
                ...selectedVariant,
                [variant.id]: valueId, // store value ID instead of name
              };
              onVariantChange(newSelectedVariant);
            }}
            aria-label={variant.name}
          >
            {variant.values?.map((value) => (
              <Field key={value.id} className="flex items-center gap-2">
                <Radio
                  value={value.id}
                  id={`${variant.id}-${value.id}`}
                  className="group flex items-center justify-center rounded-md border border-trippicalBlack bg-transparent data-[checked]:bg-trippicalBlack"
                >
                  <FaCheck className="invisible rounded-sm text-offWhite text-xs group-data-[checked]:visible" />
                </Radio>
                <Label htmlFor={`${variant.id}-${value.id}`}>{value.name}</Label>
              </Field>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  </div>
);
