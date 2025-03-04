import { FileUpIcon } from "lucide-react";
import React from "react";

const UiFileInput = ({
  supportFormat,
  maxSize,
  name,
  error,
  handleChange,
  value,
  className,
}) => {
  return (
    <section className={`w-full flex flex-col gap-1 ${className}`}>
      <label
        htmlFor="upload_file"
        className={`w-full h-40 border-dotted border-2  bg-offWhite/50 rounded flex flex-col items-center justify-center gap-4 ${
          error ? "border-error/50" : "border-offWhite"
        }`}
      >
        <FileUpIcon className="stroke-1 size-10 text-darkGray" />
        {value ? (
          <p className="text-primary text-sm font-semibold">{value.name}</p>
        ) : (
          <p className="text-sm font-medium text-gray">
            Drag and drop your file here or click to upload
          </p>
        )}
      </label>
      <input
        name={name}
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];
          if (selectedFile) {
            handleChange(selectedFile);
          }
        }}
        multiple={false}
        id="upload_file"
        accept={supportFormat?.join(",")}
        type="file"
        className="hidden"
      />
      <section className="text-xs text-darkGray font-medium flex items-center justify-between">
        <p>Support format {supportFormat?.join(", ")}</p>
        <p>Max size: {maxSize}</p>
      </section>
    </section>
  );
};

export default UiFileInput;
