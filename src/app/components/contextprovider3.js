"use client";
import React, { createContext, useState } from "react";

// Create Context
export const abcde = createContext();

// Provider Component
const ContextProvider3 = ({ children }) => {
  const [val3, setVal3] = useState("");

  return (
    <abcde .Provider value={{ val3, setVal3 }}>
      {children}
    </abcde.Provider>
  );
};

export default ContextProvider3;
