import React, { useState } from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import SidebarMenu from "./SidebarMenu";
import Cakes from './cakes';
import Concept from './concept';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <div>
      <Header onLogoHover={() => setIsSidebarVisible(true)} onLogoLeave={() => setIsSidebarVisible(false)} />
      <SidebarMenu isVisible={isSidebarVisible} />
      <Main />
      <Cakes/>
    <Concept />
    </div>
  )
}

export default App
