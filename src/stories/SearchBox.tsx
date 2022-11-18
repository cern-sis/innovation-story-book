import React from "react";
import { Input, AutoComplete } from "antd";
import classNames from "classnames";
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
  return (
    <>
      <span className={classNames("__SearchBox__ ant-input-group")}>
        <span className="ant-input-group-addon">
          {/* <SearchBoxNamespaceSelectContainer /> */}
        </span>
        <AutoComplete
          autoFocus
          dropdownClassName="header-dropdown"
          className="autocomplete"
          //   value={inputValue}
          dropdownMatchSelectWidth
          //   options={autoCompleteOptions}
          //   onSelect={onAutoCompleteSelect}
        >
          <Input.Search
            data-test-id="search-box-input"
            // placeholder={placeholder}
            size="large"
            enterButton
            // onChange={onInputChange}
            // onSearch={onInputSearch}
          />
        </AutoComplete>
      </span>
    </>
  );
};
 