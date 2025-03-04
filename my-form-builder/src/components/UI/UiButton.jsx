import { LoaderCircle } from "lucide-react";
import React from "react";

const UiButton = ({
  text,
  buttonType = "primary",
  icon,
  isLoading,
  type = "button",
  ...rest
}) => {
  if (buttonType === "secondary") {
    return (
      <button
        {...rest}
        type={type}
        disabled={isLoading || rest.disabled}
        className={`h-10 flex items-center text-body justify-center gap-2 text-sm font-semibold 
        ring-1 ring-extraLightGray cursor-pointer ${rest.className} rounded bg-white outline-none 
         transition-all disabled:brightness-90  disabled:cursor-not-allowed disabled:ring-0
         hover:brightness-90 focus:ring-primary/50`}
      >
        {isLoading ? (
          <LoaderCircle className="size-5 animate-spin text-body" />
        ) : (
          <>
            {text ? <>{text}</> : <></>}
            {icon ? <span>{icon}</span> : <></>}
          </>
        )}
      </button>
    );
  }

  if (buttonType === "primary") {
    return (
      <button
        {...rest}
        type={type}
        disabled={isLoading || rest.disabled}
        className={`h-10 ${rest.className} rounded flex items-center justify-center gap-2 text-sm 
          font-medium  text-white bg-primary outline-none hover:brightness-90 transition-all
           focus:ring-1 focus:ring-primary/50 cursor-pointer 
          disabled:brightness-90 disabled:cursor-not-allowed disabled:ring-0`}
      >
        {isLoading ? (
          <LoaderCircle className="size-5 animate-spin text-white" />
        ) : (
          <>
            {text ? <>{text}</> : <></>}
            {icon ? <span>{icon}</span> : <></>}
          </>
        )}
      </button>
    );
  }

  return (
    <button
      {...rest}
      type={type}
      disabled={isLoading || rest.disabled}
      className={`text-sm text-body font-medium flex items-center justify-center  gap-1  
            cursor-pointer ${rest.className} rounded transition-all disabled:opacity-60 
             disabled:cursor-not-allowed outline-none`}
    >
      {isLoading ? (
        <LoaderCircle className="size-5 animate-spin text-inherit" />
      ) : (
        <>
          {text ? <>{text}</> : <></>}
          {icon ? <span>{icon}</span> : <></>}
        </>
      )}
    </button>
  );
};

export default UiButton;
