import { createContext, useState } from "react";
import FormPreview from "../components/FormPreview";
import InputCreator from "../components/InputCreator";
import Layout from "../components/Layout";
import React from "react";

const FormContext = createContext({});

const FormBuilder = () => {
  //Hooks
  const [formFields, setFormFields] = useState([]);
  const [editData, setEditData] = useState({});

  const handleCreateField = (data) => {
    setFormFields([...formFields, data]);
  };

  return (
    <div className="bg-offWhite h-full w-full p-4 flex gap-4">
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
