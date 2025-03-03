import { useContext } from "react";
import { FormContext } from "../pages/FormBuilder";
import React from "react";
import { GripVertical, PencilIcon, Trash2Icon } from "lucide-react";
import UiButton from "./UI/UiButton";

const Layout = () => {
  const { formFields } = useContext(FormContext);

  return (
    <div className="flex flex-col gap-2 h-full w-[20%] bg-white rounded-lg p-4 shadow-xl">
      <h3 className="text-center">Layout</h3>
      <div className="flex flex-col gap-4 h-full overflow-y-auto">
        {formFields?.map((field, index) => {
          return (
            <div
              id={index}
              className="h-10 flex items-center justify-between bg-gray-200 shadow-xl p-2 rounded-lg"
            >
              <section className="flex items-center gap-2">
                <GripVertical className="size-6 text-gray-600" />
                <p className="capitalize">{field.label}</p>
              </section>
              <section className="flex items-center gap-2">
                <UiButton
                  buttonType="tertiary"
                  icon={<PencilIcon className="size-6 text-gray-600" />}
                />
                <UiButton
                  buttonType="tertiary"
                  icon={<Trash2Icon className="size-6 text-gray-600" />}
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
