"use client";

import { InputProps } from "@/types/components/coreUI/Input";
import React from "react";

const Input = ({
  value = "",
  onChange = () => {
    {
    }
  },
  className = "",
  placeholder = "",
  type = "text",
  disabled = false,
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
