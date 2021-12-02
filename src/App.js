import { useEffect, useState } from 'react';
import './App.css';

// Assests

// Layout
import {DashboardLayout} from "./layouts/dashboard-layout/index";

// Components
import { Page } from './pages/homepage';

// API
import {Objectx} from "./api/menu_data";

// Components
import NavigationBar from './pages/homepage/Components/NavigationBar';
import MobileMenu from './pages/homepage/Components/MobileMenu';
import MainContent from './pages/homepage/Components/MainArea';

function App() {

  const [banner, setBanner] = useState(null);
  const [groups, setGroups] = useState(null);

  useEffect(() => { 
    getBanner(Objectx);
    getGroups(Objectx);
  }, [])

  const getBanner = (arr) => {
    const banner = arr.sections.filter(item => item.section_type === "banner");
    // console.log("banner", banner[0].content);
    setBanner(banner[0].content)
  }

  const getGroups = (arr) => {
    const groups = arr.sections.filter(item => item.section_type === "group");
    // console.log("Groups", groups[0].content[1]);
    setGroups(groups[0].content[1])
  }

  return (
    <Page>
      <DashboardLayout>
          <NavigationBar />
          <MainContent banner={banner} groups={groups}/>
          <MobileMenu />
      </DashboardLayout>    
    </Page>
  );
}

export default App;