import { useContext, useState } from "react";
import { FormContext } from "../pages/FormBuilder";
import React from "react";
import { GripVertical, PencilIcon, Trash2Icon } from "lucide-react";
import UiButton from "./UI/UiButton";

const Layout = () => {
  // States
  const [removedFieldIndex, setRemovedFieldIndex] = useState();
  //Hooks
  const { formFields, setFormFields, setEditData } = useContext(FormContext);

  //Functions
  const handleDrag = (index) => {
    setRemovedFieldIndex(index);
  };

  const handleDrop = (index) => {
    const formFieldCopy = [...formFields];
    const removedField = formFieldCopy.splice(removedFieldIndex, 1);
    formFieldCopy.splice(index, 0, ...removedField);
    setFormFields(formFieldCopy);
  };

  return (
    <div className="flex flex-col gap-4 h-full w-[25%] bg-white rounded-lg p-4 shadow-xl">
      <h3 className="text-center text-subHeading font-semibold text-2xl">
        Layout
      </h3>
      <div className="flex flex-col gap-4 h-full overflow-y-auto">
        {formFields?.map((field, index) => {
          return (
            <div
              id={index}
              className="h-12 flex items-center justify-between bg-offWhite shadow-lg p-2 rounded-lg"
              draggable
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrag={() => {
                handleDrag(index);
              }}
              onDrop={() => {
                handleDrop(index);
              }}
            >
              <section className="flex items-center gap-2">
                <GripVertical className="size-6 text-gray" />
                <p className="capitalize text-md font-semibold">
                  {field.label}
                </p>
              </section>
              <section className="flex items-center gap-2">
                <UiButton
                  buttonType="tertiary"
                  icon={<PencilIcon className="size-6 text-secondary/50" />}
                  onClick={() => setEditData(field)}
                />
                <UiButton
                  buttonType="tertiary"
                  icon={<Trash2Icon className="size-6 text-error/50" />}
                />
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
