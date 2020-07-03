import React from "react";
import ColumnWrapper from "./components/ColumnWrapper";
import SingleOption from "./components/SingleOption";
import Reference from "./components/Reference";
import String from "./components/String";
import MultiLineString from "./components/MultiLineString";
export const renderFields = (
  mode,
  rowColumns,
  fieldsArray = [],
  initialValues = {},
  filters = {}
) => {
  const length = fieldsArray.length;
  return fieldsArray.map((item) => {
    const type = item.type ? item.type.toLowerCase() : "string";
    return type === "keyvalue" ? (
      <ColumnWrapper
        fieldsLength={length}
        key={item.name}
        rowColumns={rowColumns}
        colSpan={item.colSpan}
      >
        <SingleOption
          field={item}
          mode={mode}
          initialValue={initialValues && initialValues[item.name]}
          filter={filters && filters[item.name]}
        />
      </ColumnWrapper>
    ) : type === "number" ? (
      <ColumnWrapper
        fieldsLength={length}
        key={item.name}
        rowColumns={rowColumns}
        colSpan={item.colSpan}
      />
    ) : type === "reference" ? (
      <ColumnWrapper
        fieldsLength={length}
        key={item.name}
        rowColumns={rowColumns}
        colSpan={item.colSpan}
      >
        <Reference
          field={item}
          mode={mode}
          initialValue={initialValues && initialValues[item.name]}
          filter={filters && filters[item.name]}
        />
      </ColumnWrapper>
    ) : type === "string" ? (
      <ColumnWrapper
        fieldsLength={length}
        key={item.name}
        rowColumns={rowColumns}
        colSpan={item.colSpan}
      >
        {item.multiline ? (
          <MultiLineString
            field={item}
            mode={mode}
            initialValue={initialValues && initialValues[item.name]}
            filter={filters && filters[item.name]}
          />
        ) : (
          <String
            field={item}
            mode={mode}
            initialValue={initialValues && initialValues[item.name]}
            filter={filters && filters[item.name]}
          />
        )}
      </ColumnWrapper>
    ) : null;
  });
};
