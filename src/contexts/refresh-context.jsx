import { createContext, useState } from "react";

export const RefreshContext = createContext(null);

const RefreshContextProvider = ({ children, refreshFunction }) => {
  const [refreshing, setRefreshing] = useState(false);

  const refresh = () => {
    setRefreshing(true);
    refreshFunction();
    setRefreshing(false);
  };

  return (
    <RefreshContext.Provider value={{ refreshing, refresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export default RefreshContextProvider;
