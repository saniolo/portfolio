import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './site/site.css';
import { LangProvider } from './site/lang';
import Home from './site/Home';
import ProjectSheet from './site/ProjectSheet';
import NotFound from './site/NotFound';

function ScrollManager() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const target = document.getElementById(hash.slice(1));
            if (target) {
                target.scrollIntoView();
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}

function App() {
    return (
        <LangProvider>
            <Router>
                <ScrollManager />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:slug" element={<ProjectSheet />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </LangProvider>
    );
}

export default App;
