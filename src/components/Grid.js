import { useState } from 'react';

import { tabsData } from 'constants.js';

// Components
import Tab from 'components/Tab.js';

const Grid = () => {
  const data = tabsData;
  const defaultTabID = data[0]?.id;
  const [activeTab, updateActiveTab] = useState(defaultTabID);
  return (
    <ul>
      {data.map(tabData => (
        <li key={tabData.id}>
          <Tab
            data={tabData}
            onClickHandler={updateActiveTab}
            active={activeTab == tabData.id}
          />
        </li>
      ))}
    </ul>
  );
}
export default Grid;
