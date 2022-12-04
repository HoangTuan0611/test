import React, { useRef, useState, useEffect } from "react";

const Myinput = () => {
  const [data, setData] = useState("");
  const [errMess, setErrMess] = useState("");
  const onChangeHandler = (data) => {
    setData(data);
  };
  const handleOutFocus = () => {
    data.trim().length === 0 && setErrMess("Input field is required");
  };

  const Rref = useRef();

  useEffect(() => {
    Rref.current.focus();
    console.log(Rref);
  }, []);

  return (
    <div>
      <input
        ref={Rref}
        type="text"
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
        onBlur={handleOutFocus}
      />
      <p>{data}</p>
      {errMess && <p>{errMess}</p>}
    </div>
  );
};

export default Myinput;
