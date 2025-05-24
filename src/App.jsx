import React from 'react';
import styles from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar'; 
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

function App() {
  return (
    <div className={styles.appContainer}>
      
        
        <Sidebar />
        <Header/>
        <DashboardMainContent/> 
        
        
      
    </div>
  );
}

export default App;