import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from './lang';
import { FormStrip, Stamp, FormFooter, Arrow } from './Sheet';

export default function NotFound() {
    const { t } = useLang();

    useEffect(() => {
        document.title = `${t.notFound} · Samuel Bruno`;
    }, [t]);

    return (
        <>
            <FormStrip />
            <main id="content" className="sheet cover void">
                <div className="project__grid void__grid">
                    <div className="field">
                        <span className="label">{t.sheet}</span>
                        <p className="fill fill--mono fill--lg">TA-00</p>
                    </div>
                    <div className="field project__name">
                        <span className="label">{t.status}</span>
                        <h1 className="fill fill--display">{t.notFound}</h1>
                    </div>
                    <div className="field project__scope">
                        <span className="label">{t.scope}</span>
                        <p className="fill fill--prose">{t.notFoundBody}</p>
                    </div>
                </div>
                <Stamp label={t.void} tone="void">{t.void}</Stamp>
                <Link to="/" className="button">
                    <Arrow back />
                    {t.home}
                </Link>
            </main>
            <FormFooter />
        </>
    );
}
