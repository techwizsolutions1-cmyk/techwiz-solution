"use client";
import React, { createContext, useState } from "react";

// Create Context
export const abcd = createContext();

// Provider Component
const ContextProvider2 = ({ children }) => {
  const [val2, setVal2] = useState("");

  return (
    <abcd.Provider value={{ val2, setVal2 }}>
      {children}
    </abcd.Provider>
  );
};

export default ContextProvider2;
