import React, { useState, useEffect, useCallback } from "react";
import "./SearchBox.less"
import classNames from "classnames";
// https://github.com/inspirehep/inspirehep/blob/b297bd1d68fa7e28c0a43386a6a5d7c38e1e907b/ui/src/common/components/SearchBox/SearchBox.tsx

import {InputSearch} from './InputSearch'
import {Autocomplete} from './AutoComplete'

export const SearchBox = ({
  value,
  placeholder,
  onSearch,
  namespace,
  className,
}: {
  value?: string;
  placeholder?: string;
  onSearch: Function;
  namespace: string;
  className?: string;
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<
    Set<{ value: any; label: JSX.Element }> | never[]
  >([]);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [changed, setChanged] = useState(value);

  const onAutoCompleteSelect = useCallback((selectedValue: string) => {
    setInputValue(selectedValue);
    setShouldSearch(true);
  }, []);

  useEffect(() => {
    const valueOrEmpty = value != null ? value : "";
    setInputValue(valueOrEmpty);
  }, [value]);

  const onInputSearch = useCallback(() => {
    setShouldSearch(true);
  }, [inputValue]);

  const onInputChange = useCallback(
    (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      const options: Set<{value: any; label: JSX.Element}> = [{ value: "value1", label: <>label1</> }]
      setAutoCompleteOptions(options);
    },
    [namespace]
  );
  return (
    <>
       <span className={classNames("__SearchBox__ ant-input-group")}>
        <Autocomplete
          value={inputValue}
          options={autoCompleteOptions}
          onSelect={onAutoCompleteSelect}
        >
          <InputSearch
            placeholder={placeholder}
            onInputChange={onInputChange}
            onInputSearch={onInputSearch}
          />
        </Autocomplete>
      </span>
    </>
  );
};
