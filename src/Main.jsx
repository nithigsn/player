import { useState,useEffect } from "react";
import HomePage from "./Pages/HomePage";
import JustinPage from "./Pages/JustinPage";
import WelcomePage from './Pages/WelcomePage';

export default function Main() {
    // const [page, setPage] = useState('home');
    const [page, setPage] = useState(JSON.parse(localStorage.getItem('page')) || "page");

    useEffect(() => {
        localStorage.setItem('page', JSON.stringify(page));
    }, [page]);

    switch (page) {
        case 'home':
            return <HomePage page={page} setPage={setPage} />;
        case 'justin':
            return <JustinPage page={page} setPage={setPage} />;
        case 'welcome':
            return <WelcomePage page={page} setPage={setPage} />;
        default:
            return <HomePage page={page} setPage={setPage} />;
            ; 
    }
}
