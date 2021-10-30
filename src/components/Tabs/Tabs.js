import React, { createContext, useState } from "react";

export let Tab_Context_Provider = createContext();

function Tabs(props) {
  let { defaultTab, children } = props;
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <Tab_Context_Provider.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </Tab_Context_Provider.Provider>
  );
}

export default Tabs;
