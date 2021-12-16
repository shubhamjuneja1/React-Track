import { useState, useEffect } from 'react';

// Components
import SubTab from 'components/SubTab.js';

const Tab = ({data, onClickHandler, active}) => {
  const activeClass = active ? 'active' : 'inactive';
  const [activeSubTab, updateActiveSubTab] = useState(1);

  useEffect(() => {
    updateActiveSubTab(1)
  }, [active])
  
  return (
    <div>
      <a
        className={`${activeClass}`}
        onClick={() => onClickHandler(data.id)}
      >
        {data.name}
      </a>
      <ul>
        {active && 
          data.subtabs?.map((subTabData) => (
            <li key={subTabData.id}>
              <SubTab
                data={subTabData}
                onClickHandler={updateActiveSubTab}
                active={activeSubTab == subTabData.id}
              ></SubTab>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Tab;
