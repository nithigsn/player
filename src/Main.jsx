import React, { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage";
import WelcomePage from './Pages/WelcomePage';

export default function Main() {
    //  initial state to "welcome" if no item is found in localStorage
    const [page, setPage] = useState(() => {
        const storedPage = localStorage.getItem('page');
        return storedPage ? JSON.parse(storedPage) : "welcome";
    });

    // Update localStorage whenever `page` changes
    useEffect(() => {
        localStorage.setItem('page', JSON.stringify(page));
    }, [page]);

    // Render different pages based on the current `page` state
    switch (page) {
        case 'home':
            return <HomePage setPage={setPage} />;
        // case 'justin':
        //     return <JustinPage setPage={setPage} />;
        case 'welcome':
            return <WelcomePage setPage={setPage} />;
        default:
            return <WelcomePage setPage={setPage} />;
    }
}
