import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/agent.css'; // Import the custom CSS file

const Agent = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabSelect = (event) => {
    setSelectedTab(event.target.value);
  };

  return (
    <div>
      <select className="custom-select" value={selectedTab} onChange={handleTabSelect}>
        <option value="tab1">Tab 1</option>
        <option value="tab2">Tab 2</option>
        <option value="tab3">Tab 3</option>
      </select>

      <div className="tab-content">
        <div className={`tab-pane ${selectedTab === 'tab1' ? 'active' : ''}`} id="tab1">
          <h3>Tab 1 Content</h3>
          <p>This is the content for Tab 1</p>
        </div>
        <div className={`tab-pane ${selectedTab === 'tab2' ? 'active' : ''}`} id="tab2">
          <h3>Tab 2 Content</h3>
          <p>This is the content for Tab 2</p>
        </div>
        <div className={`tab-pane ${selectedTab === 'tab3' ? 'active' : ''}`} id="tab3">
          <h3>Tab 3 Content</h3>
          <p>This is the content for Tab 3</p>
        </div>
      </div>
    </div>
  );
};

export default Agent;
