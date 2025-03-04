import { useFormContext } from "react-hook-form";
import { Asterisk } from "lucide-react";
import React from "react";

function UiInput({
  containerClass,
  label,
  registerOptions,
  name,
  className,
  placeholder,
  disabled,
  textHint,
  type = "text",
  min,
  max,
  autoComplete = "off",
  textHintClassName,
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  let errorMessage = String(errors[name]?.message || "");

  if (String(name).includes(".")) {
    const [parent, index, child] = String(name).split(".");
    errorMessage = String(errors?.[parent]?.[index]?.[child]?.message || "");
  }

  return (
    <div className={`flex flex-col w-full ${containerClass}`}>
      {label && (
        <label className="text-xs flex items-center gap-1 text-left text-body font-semibold pl-1">
          {label}
          {registerOptions?.required && (
            <Asterisk className="size-2 text-error -translate-y-1" />
          )}
        </label>
      )}
      <section className="w-full ">
        <input
          {...rest}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name, registerOptions)}
          autoComplete={autoComplete}
          data-iserror={errorMessage ? true : false}
          className={`inputGroup h-10 w-full text-sm 
                text-body font-semibold px-2 py-1 placeholder:font-medium placeholder:text-darkGray/80 outline-none rounded  
                 z-10 border border-offWhite focus:border-primary/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:bg-extraLightGray/30 
                  ${className}`}
          min={min}
          max={max}
        />
      </section>

      {errorMessage ? (
        <p className="text-xs text-error/90 font-medium pl-1 ">
          {errorMessage}
        </p>
      ) : (
        textHint && (
          <p
            className={`text-xs font-medium text-gray pl-1 w-full ${textHintClassName}`}
          >
            {textHint}
          </p>
        )
      )}
    </div>
  );
}

export default UiInput;
