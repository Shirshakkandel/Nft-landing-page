import React, { createContext, useState } from 'react';
export const SectionContext = createContext();

const SectionContextProvider = props => {
  const [currentSection, setCurrentSection] = useState('home');
  return <SectionContext.Provider value={{ currentSection, setCurrentSection }}>{props.children}</SectionContext.Provider>;
};

export default SectionContextProvider;
