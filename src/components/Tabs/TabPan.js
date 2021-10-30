import React, { useContext, useState } from "react";
import { Tab_Context_Provider } from "./Tabs";

function Tab_Pan(props) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);
  let { children, tabIndex } = props;

  if (activeTab === tabIndex) {
    return <div className="tabs-tab-pan">{children}</div>;
  } else {
    return null;
  }
}

export default Tab_Pan;
