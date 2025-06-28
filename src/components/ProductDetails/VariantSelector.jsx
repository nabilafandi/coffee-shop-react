/* eslint-disable react/prop-types */
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";

export const VariantSelector = ({
  variants,
  selectedVariant,
  selectedAddons,
  onVariantChange,
  onAddonChange,
}) => {
  // Single select for "always"
  const handleVariantChange = (variant, valueId) => {
    const newSelectedVariant = {
      ...selectedVariant,
      [variant.id]: valueId,
    };
    onVariantChange(newSelectedVariant);
  };

  // Multi select for "never"
  const handleAddonChange = (variantId, valueId, checked) => {
    const prev = selectedAddons[variantId] || [];
    let updated;
    if (checked) {
      updated = [...prev, valueId];
    } else {
      updated = prev.filter((id) => id !== valueId);
    }
    onAddonChange({
      ...selectedAddons,
      [variantId]: updated,
    });
  };

  return (
    <div className="inline-block w-auto">
      <h3 className="text-sm font-bold">Choose a variant:</h3>
      <div className="mt-2 inline-grid md:grid-cols-2 gap-2 w-full">
        {variants?.map((variant) => (
          <div key={variant.id}>
            <p>{variant.name}</p>
            {variant.create_variant === "always" ? (
              <RadioGroup
                value={selectedVariant?.[variant.id] || null}
                onChange={(valueId) => handleVariantChange(variant, valueId)}
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
            ) : (
              <div>
                {variant.values?.map((value) => (
                  <Field key={value.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`${variant.id}-${value.id}`}
                      checked={selectedAddons?.[variant.id]?.includes(value.id) || false}
                      onChange={(e) =>
                        handleAddonChange(variant.id, value.id, e.target.checked)
                      }
                    />
                    <Label htmlFor={`${variant.id}-${value.id}`}>{value.name}</Label>
                  </Field>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};