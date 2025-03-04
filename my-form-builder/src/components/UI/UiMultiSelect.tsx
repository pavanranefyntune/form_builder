import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Asterisk, Check, ChevronsUpDown, Search } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import UiButton from "./UiButton";
import UiInput from "./UiInput";

function UiMultiSelect({
  options,
  selectedValues,
  placeholder,
  label,
  isRequired,
  accessorKey = "name",
  className,
  query,
  setQuery,
  onChange,
  showCount = 3,
  emptyText,
  error,
}) {
  const totalSelected = Number(selectedValues?.length) || 0;
  return (
    <div className="w-full">
      {label && (
        <label className="text-xs flex items-center gap-1 text-left text-body font-semibold pl-1">
          {label}
          {isRequired && (
            <Asterisk className="size-2 text-error -translate-y-1" />
          )}
        </label>
      )}
      <Listbox multiple value={selectedValues} onChange={onChange}>
        {({ open }) => {
          return (
            <>
              <ListboxButton
                className={`relative w-full px-3 border border-offWhite h-10 rounded ${className}`}
              >
                <div className="flex items-center gap-2">
                  {totalSelected ? (
                    <>
                      {selectedValues?.slice(0, showCount).map((value) => (
                        <UiButton
                          key={value?.id}
                          className="px-2 py-0.5 rounded bg-primary/5 text-primary"
                          buttonType="tertiary"
                          text={value?.[accessorKey]}
                        />
                      ))}
                      {totalSelected > showCount && (
                        <div className="h-6 w-6 rounded-full bg-offWhite text-sm font-medium flex items-center justify-center ">
                          +{totalSelected - showCount}
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-sm text-darkGray/80  font-medium">
                      {placeholder}
                    </span>
                  )}
                  <ChevronsUpDown
                    className="size-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray"
                    aria-hidden="true"
                  />
                </div>
              </ListboxButton>
              {error?.message && (
                <p className="text-xs text-error font-medium pl-2 mt-0.5">
                  {error?.message}
                </p>
              )}
              <AnimatePresence>
                {open ? (
                  <ListboxOptions
                    as={motion.div}
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    anchor="bottom"
                    className="w-[var(--button-width)] [--anchor-gap:4px]  relative shadow-md border bg-white border-offWhite flex flex-col gap-2 rounded  outline-none z-50 px-2 pt-4 pb-1"
                  >
                    <UiInput
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={`Search ${label?.toLocaleLowerCase()}...  `}
                      className="w-full h-8 bg-offWhite/50"
                      icon={<Search className="size-4" />}
                    />
                    <div className="py-2 flex flex-col gap-1 max-h-80 overflow-y-auto">
                      {options?.length ? (
                        options?.map((optionValue) => {
                          return (
                            <ListboxOption
                              value={optionValue}
                              key={optionValue?.id}
                              className="flex cursor-pointer hover:bg-primary/20 rounded items-center w-full text-sm font-medium p-2"
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    data-selected={selected}
                                    className="rounded h-4 w-4 p-0.5 flex items-center justify-center ring-1 ring-extraLightGray data-[selected=true]:bg-primary data-[selected=true]:text-white data-[selected=true]:ring-primary bg-white"
                                  >
                                    {selected && (
                                      <Check className="size-4 stroke-[3] text-inherit" />
                                    )}
                                  </span>
                                  <span
                                    className={`truncate ml-2 text-ellipsis`}
                                  >
                                    {optionValue?.[accessorKey] || ""}
                                  </span>
                                </>
                              )}
                            </ListboxOption>
                          );
                        })
                      ) : (
                        <p className="text-sm px-2 font-medium text-darkGray">
                          {emptyText}
                        </p>
                      )}
                    </div>
                  </ListboxOptions>
                ) : null}
              </AnimatePresence>
            </>
          );
        }}
      </Listbox>
    </div>
  );
}

export default UiMultiSelect;
