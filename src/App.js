import React from 'react'
import './App.css';
import FocusInput from './components/FocusInput';
//import GrandParent from './components/GrandParent';
//import DataFetching from './components/DataFetching';
//import MouseContainer from './components/MouseContainer';
//import ClassMouse from './components/ClassMouse';
//import HookMouse from './components/HookMouse';
//import ClassCounter2 from './components/ClassCounter2';
//import ClassCounter1 from './components/ClassCounter1';
//import HookCounter1 from './components/HookCounter1';
//import HookCounter2 from './components/HookCounter2';
//import HookCounter3 from './components/HookCounter3';
//import HookCounter4 from './components/HookCounter4';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
//import HookCounter5 from './components/HookCounter5';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'Nabendu'}>
        <ChannelContext.Provider value={'TheWebDev'}>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <FocusInput />
    </div>
  );
}

export default App;
