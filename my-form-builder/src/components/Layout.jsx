import { useContext, useState } from "react";
import { FormContext } from "../pages/FormBuilder";
import React from "react";
import {
  BetweenHorizontalEndIcon,
  GripVertical,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
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

  const handleDelete = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields([...updatedFields]);
  };

  return (
    <div className="flex flex-col gap-4 h-full w-[25%] bg-white rounded-lg px-4 py-2 shadow-xl">
      <p className=" text-subHeading font-semibold text-lg flex items-center gap-2">
        {" "}
        <span className="bg-secondary/10 p-2 rounded-full">
          {<BetweenHorizontalEndIcon className="size-4 text-secondary/90" />}{" "}
        </span>
        Layout
      </p>
      <div className="flex flex-col gap-4 h-full overflow-y-auto px-4 py-2 ">
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
                <GripVertical className="size-4 text-gray" />
                <p className="capitalize text-md font-semibold">
                  {field.label}
                </p>
              </section>
              <section className="flex items-center gap-2">
                <UiButton
                  buttonType="tertiary"
                  icon={<PencilIcon className="size-4 text-secondary/60" />}
                  onClick={() => setEditData({ index, ...field })}
                />
                <UiButton
                  buttonType="tertiary"
                  icon={<Trash2Icon className="size-4 text-error/60" />}
                  onClick={() => handleDelete(index)}
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
