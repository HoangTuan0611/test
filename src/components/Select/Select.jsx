import React from "react";
import { Select } from "semantic-ui-react";

const MySelect = (props) => {
  const { options, placeholder } = props;
  return <Select placeholder={placeholder} options={options} />;
};

export default MySelect;
