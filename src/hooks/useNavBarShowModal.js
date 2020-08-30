import { useState, useEffect } from "react";

export default function useNavBarShowModal() {
  const [show, setShow] = useState(false);
  const [showValue, setShowValue] = useState("");
  const [ariaExpanded, setAriaExpanded] = useState("false");

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    setShowValue(show ? "show" : "");
    setAriaExpanded(show ? "true" : "false");
  }, [show]);

  return [handleShow, showValue, ariaExpanded];
}
