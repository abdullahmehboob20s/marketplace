import React, { useContext } from "react";
import { Tab_Context_Provider } from "./Tabs";

function Tab(props) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);
  let { label, tabIndex, className, activeClassName } = props;
  let active = activeTab === tabIndex;
  return (
    <div
      className={active ? className + " " + activeClassName : className}
      onClick={() => setActiveTab(active ? "" : tabIndex)}
    >
      {label}
    </div>
  );
}

export default Tab;
