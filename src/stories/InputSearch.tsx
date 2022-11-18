import React from "react";
import { Input } from "antd";
import "./SearchBox.less";
// https://github.com/inspirehep/inspirehep/blob/b297bd1d68fa7e28c0a43386a6a5d7c38e1e907b/ui/src/common/components/SearchBox/SearchBox.tsx

export const InputSearch = ({
  placeholder,
  onInputChange,
  onInputSearch,
}: {
  placeholder?: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onInputSearch:
    | ((
        value: string,
        event?:
          | React.ChangeEvent<HTMLInputElement>
          | React.MouseEvent<HTMLElement, MouseEvent>
          | React.KeyboardEvent<HTMLInputElement>
          | undefined
      ) => void)
    | undefined;
}) => {
  return (
    <Input.Search
      data-test-id="search-box-input"
      placeholder={placeholder}
      size="large"
      enterButton
      onChange={onInputChange}
      onSearch={onInputSearch}
    />
  );
};
