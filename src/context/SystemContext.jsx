import { createContext, useContext, useState } from "react";

const SystemContext = createContext();

export 	const SystemTheme = {
	DARK: 0,
	LIGHT: 1
}

export const SystemContextProvider = ({children}) => {
	const defaultTheme = SystemTheme.LIGHT; // Get from somewhere else
  const [systemTheme, setSystemTheme] = useState(defaultTheme ?? SystemTheme.LIGHT);
  const toggleTheme = () => {
    setSystemTheme((systemTheme) => systemTheme === SystemTheme.DARK ? SystemTheme.LIGHT : SystemTheme.DARK);
  }
  return (
    <SystemContext.Provider value={{systemTheme, toggleTheme}}>
			{children}
		</SystemContext.Provider>
  )
}

export function useSystemContext() {
  const context = useContext(SystemContext);  
  if (context === null) 
    throw new Error('SystemContext must be used within a SystemContextProvider');
  return context;
}