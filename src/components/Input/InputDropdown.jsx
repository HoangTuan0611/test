import React, { Fragment } from "react";
import { Dropdown, Input } from "semantic-ui-react";

const InputDropdown = (props) => {
  const { options } = props; // lay options trong props
  return (
    <>
      {options && options.length > 0 && (
        <Input
          label={
            <Dropdown inline defaultValue={options[0].key} options={options} />
          }
          labelPosition="left"
          placeholder="Find domain"
        />
      )}
    </>
  );
};

export default InputDropdown;
