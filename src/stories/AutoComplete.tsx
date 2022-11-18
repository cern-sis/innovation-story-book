import React from "react";
import { AutoComplete } from "antd";
import "./SearchBox.less"
// https://github.com/inspirehep/inspirehep/blob/b297bd1d68fa7e28c0a43386a6a5d7c38e1e907b/ui/src/common/components/SearchBox/SearchBox.tsx


export const Autocomplete = ({
    value, 
    options, 
    onSelect,
    children
}: {
    value: any, 
    options: any, 
    onSelect: any
    children: any
}) => {

  return (
    <AutoComplete
    autoFocus
    dropdownClassName="header-dropdown"
    className="autocomplete"
    value={value}
    dropdownMatchSelectWidth
    options={options}
    onSelect={onSelect}
  > {children}
  </AutoComplete>
  );
};
