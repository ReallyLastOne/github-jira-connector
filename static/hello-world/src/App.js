import React from 'react';
import SideNav from "./navigation/SideNav";
import Settings from "./settings/Settings";
import Issue from "./issue/Issue";
import Automation from "./automation/Automation";
import Dashboard from "./dashboard/Dashboard";
import styles from './App.module.css';

const App = () => {
    const [page, setPage] = React.useState('dashboard');

    function onPageChange(page) {
        setPage(page);
    }

    function renderPage() {
        switch (page) {
            case 'dashboard':
                return (<Dashboard></Dashboard>);
            case 'settings':
                return (<Settings></Settings>);
            case 'issue':
                return (<Issue></Issue>);
            case 'automation':
                return (<Automation></Automation>);
        }
    }

    return (<div className={styles.main}>
        <SideNav className={styles.nav} onPageChange={onPageChange}/>
        <div className={styles.content}>{renderPage()}</div>
    </div>);
};

export default App;
