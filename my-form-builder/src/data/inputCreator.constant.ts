const gridOptions = [
  {
    id: 1,
    name: "One",
    value: "col-span-1",
  },
  {
    id: 2,
    name: "Two",
    value: "col-span-2",
  },
  {
    id: 3,
    name: "Three",
    value: "col-span-3",
  },
];

const typeOptions = [
  {
    id: 1,
    name: "Text",
    value: "text",
  },
  {
    id: 2,
    name: "Number",
    value: "number",
  },
  {
    id: 3,
    name: "Date",
    value: "date",
  },
  {
    id: 4,
    name: "Select",
    value: "select",
  },
  {
    id: 5,
    name: "File",
    value: "file",
  },
];

const selectorTypes = [
  {
    id: 1,
    name: "Multiselect",
    value: "multiselect",
  },
  {
    id: 2,
    name: "Searchable",
    value: "searchable",
  },
];

const defaultFields = [
  {
    label: "Name",
    type: {
      id: 1,
      name: "Text",
      value: "text",
    },
    name: "name",
    placeholder: "Enter your name",
    grid_size: {
      id: 1,
      name: "One",
      value: "col-span-1",
    },
  },
  {
    label: "Mobile",
    type: {
      id: 1,
      name: "Number",
      value: "number",
    },
    name: "mobile",
    placeholder: "Enter your mobile",
    grid_size: {
      id: 1,
      name: "One",
      value: "col-span-1",
    },
  },
];

export { gridOptions, typeOptions, selectorTypes, defaultFields };
