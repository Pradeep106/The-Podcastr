import React, { useState } from "react";

const Toggle = ({ on, off }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return <div className="cursor-pointer" onClick={toggleHandler}>{toggle ? on : off}</div>;
};

export default Toggle;
