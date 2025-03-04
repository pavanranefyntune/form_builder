import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

import {
  Asterisk,
  ChevronsUpDownIcon,
  LoaderCircle,
  Settings,
} from "lucide-react";
import { ChangeEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import UiInput from "./UiInput";

export default function UiSearchSelector({
  className,
  label,
  options,
  error,
  value,
  accessorKey = "name",
  placeholder = "search ...",
  disabled = false,
  setQuery,
  textEllipsis = 40,
  onChange,
  validateQuery,
  isRequired = true,
  isSearching = false,
  containerClass,
  emptyText = `No ${label?.toLowerCase()} data available`,
}) {
  // handle the search selector component
  function handleSearchQuery(event: ChangeEvent<HTMLInputElement>) {
    validateQuery?.(event);
    setQuery(event.target.value);
  }

  return (
    <div className="w-full">
      {label && (
        <label className="text-xs flex pb-0.5 items-center gap-1 text-left text-body font-semibold pl-1">
          {label}
          {isRequired && (
            <Asterisk className="size-2 text-error -translate-y-1" />
          )}
        </label>
      )}
      <Combobox
        immediate
        value={value}
        onChange={onChange}
        disabled={disabled}
        onClose={() => {
          setQuery?.("");
        }}
      >
        {({ open }) => {
          return (
            <>
              <ComboboxInput
                autoComplete="off"
                as={UiInput}
                icon={
                  !isSearching ? (
                    <ChevronsUpDownIcon
                      className="h-5 w-5 text-gray"
                      aria-hidden="true"
                    />
                  ) : (
                    <LoaderCircle className="size-5 text-darkGray animate-spin" />
                  )
                }
                className={className}
                displayValue={(item) => item?.[accessorKey] || ""}
                onChange={handleSearchQuery}
                placeholder={placeholder}
              />

              {error?.message && (
                <p className="text-xs text-error font-medium pl-2 mt-0.5">
                  {error?.message}
                </p>
              )}

              <AnimatePresence>
                {open && (
                  <ComboboxOptions
                    anchor="bottom"
                    static
                    as={motion.div}
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    className={`origin-top  w-[var(--input-width)] [--anchor-gap:4px] shadow-md border bg-white border-offWhite rounded  overflow-y-auto outline-none z-50 ${containerClass}`}
                  >
                    <div className="max-h-52 overflow-y-auto w-full">
                      {!isSearching && options?.length === 0 ? (
                        <div className="flex gap-2 items-center text-sm font-semibold px-4 py-2 ">
                          {emptyText}
                        </div>
                      ) : (
                        options?.map((item) => (
                          <ComboboxOption
                            key={String(item?.id)}
                            className="px-4 py-2 text-sm font-semibold cursor-pointer select-none outline-none
                   data-[selected]:text-white data-[selected]:bg-primary  data-[focus]:bg-primary/20"
                            value={item}
                          >
                            {String(item?.[accessorKey])}
                          </ComboboxOption>
                        ))
                      )}
                    </div>
                  </ComboboxOptions>
                )}
              </AnimatePresence>
            </>
          );
        }}
      </Combobox>
    </div>
  );
}
