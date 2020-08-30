import {useState} from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState("");

  const handleToggle = () => {
    setToggle(!!toggle === false ? "toggled" : "");
  };

  return [toggle, handleToggle];
}
