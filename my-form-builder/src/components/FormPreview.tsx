import React, { useContext } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormContext } from "../pages/FormBuilder";
import UiFileInput from "./UI/UiFileInput";
import UiInput from "./UI/UiInput";
import UiSelector from "./UI/UiSelector";

const FormPreview = () => {
  const { formFields } = useContext(FormContext);
  const formMethods = useForm();
  return (
    <div className="h-full w-[60%] bg-white rounded-lg p-4 shadow-xl">
      <h3 className="text-center">Form Preview</h3>
      <FormProvider {...formMethods}>
        <form className="grid grid-cols-3 gap-2">
          {formFields?.map((field, index) => {
            return ["text", "number", "date"].includes(field?.type?.value) ? (
              <UiInput
                key={index}
                placeholder={field.placeholder}
                label={field.label}
                type={field.type.value}
                name={field.name}
                containerClass={`${field.grid_size}`}
              />
            ) : field?.type?.value === "select" ? (
              <Controller
                control={formMethods.control}
                name={field.name}
                render={({ field: { onChange, value } }) => {
                  return (
                    <UiSelector
                      placeholder={field.placeholder}
                      options={field.options || []}
                      onChange={onChange}
                      value={value}
                      containerClass={`${field.grid_size}`}
                    />
                  );
                }}
              />
            ) : (
              <Controller
                control={formMethods.control}
                name={field.name}
                rules={{
                  required: "File is required.",
                }}
                render={({ field: { onChange, value } }) => {
                  return (
                    <UiFileInput
                      supportFormat={[".csv", ".xlsx", ".xls"]}
                      maxSize="100MB"
                      handleChange={onChange}
                      name={"file"}
                      value={value}
                      error={formMethods.formState.errors.file}
                      className={`${field.grid_size}`}
                    />
                  );
                }}
              />
            );
          })}
        </form>
      </FormProvider>
    </div>
  );
};

export default FormPreview;
