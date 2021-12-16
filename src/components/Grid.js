import { useState } from 'react';

// Actions
import { fetchGridData } from 'actions/fetch-grid-data.js';

// Components
import Tab from 'components/Tab.js';

const Grid = () => {
  const [activeTab, updateActiveTab] = useState(1);
  return (
    <ul>
      {fetchGridData().tabs?.map(tabData => (
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
