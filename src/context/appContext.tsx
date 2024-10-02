import React, { createContext, useState, PropsWithChildren } from 'react';

interface ScrollPositions {
  [rowIndex: number]: number;
}

interface AppContextProps {
  scrollPositions: ScrollPositions;
  updateScrollPosition: (rowIndex: number, scrollLeft: number) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [scrollPositions, setScrollPositions] = useState<ScrollPositions>({});

  const updateScrollPosition = (rowIndex: number, scrollLeft: number) => {
    setScrollPositions((prevState) => ({
      ...prevState,
      [rowIndex]: scrollLeft,
    }));
  };

  return (
    <AppContext.Provider value={{ scrollPositions, updateScrollPosition }}>
      {children}
    </AppContext.Provider>
  );
};
