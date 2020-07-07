import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import { useFormContext } from "react-hook-form";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useGlobalApi from "hooks/useGlobalApi";
import InputWrapper from "../InputWrapper";
import { SingleValueText, MultiValueText, Option, borderColor } from "./styles";

const ReferenceInput = ({ field, mode, initialValue, filter }) => {
  const {
    register,
    errors,
    setError,
    clearError,
    setValue,
    reset,
    formState: { dirty },
    watch,
  } = useFormContext();
  const { getDataByCtypeId } = useGlobalApi();
  const state = useGlobalState();
  const { currentLanguage } = state;
  const { dispatch } = useGlobalDispatch();
  const selectRef = React.useRef(null);

  const [options, setOptions] = useState();
  const [values, setValues] = useState();

  // set value to selected options
  useEffect(() => {
    register({ name: field.name, type: "custom" });
    function handleSuccess(result) {
      if (result) {
        const r = result.map((item) => {
          item.value = item._id;
          return item;
        });
        setOptions(r);
        if (mode === "filter") {
          if (filter) {
            setValue(field.name, filter);
            initValue(r, filter);
          }
        }

        // set selected options to select
        if (mode === "edit" || mode === "view") {
          if (!initialValue) setValues(null);
          else initValue(r);
        }
      }
    }
    if (field.references && field.references.length > 0) {
      if (!state[field.name])
        getDataByCtypeId(
          field.references[0],
          field.name,
          handleSuccess,
          () => {}
        );
      else handleSuccess(state[field.name]);
    }
  }, []);

  // set selected to form object if form is not in filter mode
  function initValue(allData, f) {
    let selectedData = f ? f : initialValue;
    if (field.isList) {
      const result = [];
      for (let i = 0; i < selectedData.length; i++) {
        const id = selectedData[i];
        for (let j = 0; j < allData.length; j++) {
          const refObj = allData[j];
          if (refObj.value === id) {
            result.push(refObj);
            break;
          }
        }
      }
      setValues(result.length > 0 ? result : null);
    } else {
      const v = allData.find((item) => item.value === selectedData);
      setValues(v);
    }
  }
  function handleChange(selected) {
    let isValid = true;
    let value;
    if (field.isList) {
      value = selected ? selected.map((item) => item.value) : null;
      if (mode !== "filter") {
        if (field.isRequired && (!value || value.length === 0)) {
          isValid = false;
          const e = {
            type: "required",
            name: field.name,
            message: "This is required.",
          };
          setError([e]);
        }
      }
    } else {
      value = selected ? selected.value : "";
      if (mode !== "filter" && field.isRequired && value.length === 0) {
        isValid = false;
        const e = {
          type: "required",
          name: field.name,
          message: "This is required.",
        };
        setError([e]);
      }
    }

    if (isValid) {
      clearError(field.name);
      setValue(field.name, value);
    }
    setValues(selected);
  }
  function initOptions(result) {
    return result;
  }
  function promiseOptions(inputValue) {
    return new Promise((resolve) => {
      filterContents()
        .onOk((result) => {
          if (result) resolve(initOptions(result));
        })
        .onServerError((result) => {})
        .onBadRequest((result) => {})
        .unAuthorized((result) => {})
        .notFound(() => {})
        .call(spaceInfo.id, undefined, [field.references]);
    });
  }
  return (
    <InputWrapper
      errorText={errors[field.name] ? errors[field.name]["message"] : ""}
      input={
        <Select
          name={field.name}
          ref={(e) => {
            selectRef.current = e;
          }}
          placeholder={
            field.description ? field.description[currentLanguage] : ""
          }
          menuPlacement="top"
          closeMenuOnScroll={true}
          closeMenuOnSelect={!field.isList}
          menuContainerStyle={{ zIndex: 9999 }}
          value={values}
          isClearable
          onChange={handleChange}
          options={options}
          isSearchable={false}
          styles={{
            placeholder: (base) => ({
              ...base,
              fontSize: "13px",
            }),
            menuList: (provided, state) => {
              const maxHeight = 200;
              return { ...provided, maxHeight };
            },
          }}
          isMulti={field.isList}
          isDisabled={mode === "view" ? true : false}
          components={{ Option: CustomOption, MultiValueLabel, SingleValue }}
        />
      }
    />
  );
};
export default ReferenceInput;

const SingleValue = (props) => {
  const { data } = props;
  const { currentLanguage } = useGlobalState();

  return (
    <components.SingleValue {...props}>
      <SingleValueText>
        {data.fields
          ? data.fields.name
            ? data.fields.name[currentLanguage]
              ? data.fields.name[currentLanguage]
              : typeof data.fields.name === "string"
              ? data.fields.name
              : ""
            : ""
          : ""}
      </SingleValueText>
    </components.SingleValue>
  );
};
const MultiValueLabel = (props) => {
  const { data } = props;
  const { currentLanguage } = useGlobalState();
  return (
    <components.MultiValueLabel {...props}>
      <MultiValueText>
        {data.fields
          ? data.fields.name
            ? data.fields.name[currentLanguage]
              ? data.fields.name[currentLanguage]
              : typeof data.fields.name === "string"
              ? data.fields.name
              : ""
            : ""
          : ""}
      </MultiValueText>
    </components.MultiValueLabel>
  );
};
const CustomOption = ({ innerProps, isDisabled, data }) => {
  const { currentLanguage } = useGlobalState();
  if (!isDisabled) {
    return (
      <Option {...innerProps}>
        {data.fields
          ? data.fields.name
            ? data.fields.name[currentLanguage]
              ? data.fields.name[currentLanguage]
              : typeof data.fields.name === "string"
              ? data.fields.name
              : ""
            : ""
          : ""}
      </Option>
    );
  } else return null;
};
