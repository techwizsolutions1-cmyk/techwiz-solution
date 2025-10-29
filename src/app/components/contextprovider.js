"use client";
import React, { createContext, useState } from "react";

// Create Context
export const abc = createContext();

// Provider Component
const ContextProvider = ({ children }) => {
  const [val, setVal] = useState("");

  return (
    <abc.Provider value={{ val, setVal }}>
      {children}
    </abc.Provider>
  );
};

export default ContextProvider;
