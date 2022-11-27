import './App.scss';

import routes from './pages/routes';
import { Fragment } from 'react';
import Sidebar from './layout/side-bar/index';
import { sideBarItem } from './layout/side-bar/sidebar-item';
import Navbar from './components/ui/navigation/navbar/navbar';
import BottomBar from './components/ui/navigation/audioPlayer/bottomBar';
import Modal from './components/ui/navigation/modal/modal';
import { useSelector } from 'react-redux';
import { RootState } from './stores';

// import { navigation } from "./components/ui/navigation/navigation-item"
// import sideBarItem
// import Sidebar
// console.log(routes);
console.log('🚀 ~ file: App.tsx ~ line 7 ~ routes', routes);
console.log(typeof import('./components/icons/album-icon'));
function App() {
  const { theme, show } = useSelector((state: RootState) => state.player);
  return (
    <Fragment>
      <div>
        <img className="fixed" src={theme} alt="" />
        <Navbar />
        {show ? <Modal /> : ''}
        <Sidebar data={sideBarItem}></Sidebar>
        <BottomBar />
      </div>
    </Fragment>
  );
}

export default App;
