import { Controller, FormProvider, useForm } from "react-hook-form";
import UiInput from "./UI/UiInput";
import { useContext, useEffect } from "react";
import { FormContext } from "../pages/FormBuilder";
import UiSelector from "./UI/UiSelector";
import React from "react";
import {
  gridOptions,
  selectorTypes,
  typeOptions,
} from "../data/inputCreator.constant";

const InputCreator = () => {
  const { handleCreateField, editData } = useContext(FormContext);

  const formMethods = useForm();

  const onSubmitHandler = (data) => {
    const dataObj = {
      type: data.type,
      placeholder: data.placeholder,
      name: data.name,
      label: data.label,
      grid_size: data.grid_size,
      selector_type: data.selector_type,
    };
    handleCreateField(dataObj);
  };

  useEffect(() => {
    formMethods.reset({
      ...editData,
    });
  }, [editData]);

  return (
    <div className="h-[100%] w-[25%] bg-white shadow-xl rounded-lg p-4 flex flex-col gap-4">
      <h3 className="text-center text-subHeading font-semibold text-2xl">
        Input Creator
      </h3>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-6 "
        >
          <UiInput
            name="label"
            label="Label"
            placeholder="Add Label"
            className="rounded"
          />
          <UiInput name="name" label="Name" placeholder="Add Name" />
          <Controller
            control={formMethods.control}
            name="type"
            render={({ field: { onChange, value } }) => {
              return (
                <UiSelector
                  placeholder="Select Type"
                  options={typeOptions}
                  onChange={onChange}
                  value={value}
                  label="Type"
                />
              );
            }}
          />
          {formMethods.watch()?.type?.value &&
            formMethods.watch().type?.value === "select" && (
              <Controller
                control={formMethods.control}
                name="selector_type"
                render={({ field: { onChange, value } }) => {
                  return (
                    <UiSelector
                      placeholder="Choose selector type"
                      options={selectorTypes}
                      onChange={onChange}
                      value={value}
                      label="Selector Type"
                    />
                  );
                }}
              />
            )}
          <UiInput
            name="placeholder"
            label="Placeholder"
            placeholder="Add Placeholder"
          />
          <Controller
            control={formMethods.control}
            name="grid_size"
            render={({ field: { onChange, value } }) => {
              return (
                <UiSelector
                  placeholder="Select Grid Size"
                  options={gridOptions}
                  onChange={onChange}
                  value={value}
                  label="Grid Size"
                />
              );
            }}
          />

          <input
            type="submit"
            name="Create Field"
            className="bg-blue-500 rounded text-white h-8 w-full"
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default InputCreator;
