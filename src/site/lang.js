import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from '../content/content';

const STORAGE_KEY = 'sb-lang';
const LangContext = createContext(null);

function initialLang() {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === 'en' || stored === 'it') return stored;
    } catch (e) {
        // Storage can be blocked; fall back to the browser language.
    }
    return (navigator.language || '').toLowerCase().startsWith('it') ? 'it' : 'en';
}

export function LangProvider({ children }) {
    const [lang, setLang] = useState(initialLang);

    useEffect(() => {
        const root = document.documentElement;
        root.lang = lang;
        // The English original is the navy copy, the Italian one is the bordeaux copy.
        root.dataset.copy = lang === 'it' ? 'bordeaux' : 'navy';
        const theme = document.querySelector('meta[name="theme-color"]');
        if (theme) theme.setAttribute('content', lang === 'it' ? '#5a1322' : '#0f1b33');
        try {
            window.localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            // Not persisting is fine.
        }
    }, [lang]);

    const value = useMemo(() => ({ lang, setLang, t: ui[lang] }), [lang]);
    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
    return useContext(LangContext);
}

// Picks the current language from a { en, it } pair, or returns plain values as they are.
export function pick(value, lang) {
    if (value && typeof value === 'object' && !Array.isArray(value) && ('en' in value || 'it' in value)) {
        return value[lang];
    }
    return value;
}
