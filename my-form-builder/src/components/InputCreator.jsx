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
import UiButton from "./UI/UiButton";
import { FilePlus2Icon, PlusIcon } from "lucide-react";

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
    if (editData.name) {
      dataObj.id = editData.index;
      handleCreateField(dataObj);
      formMethods.reset({
        label: "",
        type: {},
        name: "",
        placeholder: "",
        grid_size: {},
      });

      return;
    }
    handleCreateField(dataObj);
    formMethods.reset({
      label: "",
      type: {},
      name: "",
      placeholder: "",
      grid_size: {},
    });
  };

  useEffect(() => {
    formMethods.reset({
      ...editData,
    });
  }, [editData]);

  return (
    <div className="h-full w-[25%] bg-white shadow-xl rounded-lg flex flex-col gap-4 py-2 px-4 ">
      <p className=" text-subHeading font-semibold text-lg flex items-center gap-2">
        <span className="bg-secondary/10 p-2 rounded-full">
          {<FilePlus2Icon className="size-4 text-secondary/90" />}
        </span>
        Input Creator
      </p>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmitHandler)}
          className=" h-full relative overflow-hidden"
        >
          <div className="flex flex-col gap-4 px-4 py-2 overflow-y-auto h-full mb-16">
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
            {formMethods.watch()?.selector_type && (
              <UiButton
                buttonType="tertiary"
                text="Add Options"
                icon={<PlusIcon className="size-4 text-secondary/90" />}
                className="flex flex-row-reverse self-start py-1 px-2 ring-1 ring-extraLightGray bg-offWhite shadow-xs"
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
          </div>
          <section
            className="absolute bottom-1 flex justify-between gap-4 w-full
           bg-white border-t border-extraLightGray pt-4 px-1"
          >
            <UiButton
              buttonType="secondary"
              type="button"
              text="Clear"
              className="bg-primary rounded h-8  w-20"
            />
            <UiButton
              buttonType="primary"
              type="submit"
              text="Create"
              className="bg-primary rounded h-8 text-white w-20 "
            />
          </section>
        </form>
      </FormProvider>
    </div>
  );
};

export default InputCreator;
