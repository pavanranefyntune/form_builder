import { createContext, useState } from "react";
import FormPreview from "../components/FormPreview";
import InputCreator from "../components/InputCreator";
import Layout from "../components/Layout";
import React from "react";
import { defaultFields } from "../data/inputCreator.constant";

const FormContext = createContext({});

const FormBuilder = () => {
  //Hooks
  const [formFields, setFormFields] = useState([...defaultFields]);
  const [editData, setEditData] = useState({});

  const handleCreateField = (data) => {
    if (data.id >= 0) {
      const updatedFields = [...formFields];
      updatedFields.splice(data.id, 1, data);
      setFormFields([...updatedFields]);
      return;
    }
    setFormFields([...formFields, data]);
  };

  return (
    <div className="bg-offWhite h-full w-full p-4 flex gap-4 overflow-hidden">
      <FormContext.Provider
        value={{
          formFields,
          setFormFields,
          editData,
          setEditData,
          handleCreateField,
        }}
      >
        <Layout />
        <FormPreview />
        <InputCreator />
      </FormContext.Provider>
    </div>
  );
};

export { FormBuilder, FormContext };
