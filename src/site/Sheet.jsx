import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from './lang';
import { contact } from '../content/content';
import CV from '../assets/CV.pdf';

export function FormStrip({ children }) {
    const { lang, setLang, t } = useLang();
    return (
        <header className="strip">
            <a className="skip" href="#content">{t.skip}</a>
            <Link to="/" className="strip__title">
                <span className="strip__report">{t.report}</span>
                <span className="strip__doc">{t.docNo} · Samuel Bruno</span>
            </Link>
            {children}
            <div className="copies" role="group" aria-label={t.switchTo}>
                <button
                    type="button"
                    className="copies__tab copies__tab--en"
                    aria-pressed={lang === 'en'}
                    lang="en"
                    onClick={() => setLang('en')}
                >
                    EN <span className="copies__note">Copy 1</span>
                </button>
                <button
                    type="button"
                    className="copies__tab copies__tab--it"
                    aria-pressed={lang === 'it'}
                    lang="it"
                    onClick={() => setLang('it')}
                >
                    IT <span className="copies__note">Copia 2</span>
                </button>
            </div>
        </header>
    );
}

export function Stamp({ children, label, order = 0, tone = 'pass' }) {
    return (
        <span
            className={`stamp stamp--${tone}`}
            style={{ '--stamp-order': order }}
            role="img"
            aria-label={label}
        >
            <span aria-hidden="true">{children}</span>
        </span>
    );
}

export function SectionBar({ id, children }) {
    return (
        <h2 className="bar" id={id}>
            {children}
        </h2>
    );
}

export function ResultRow({ id, to, text, value, order, t }) {
    return (
        <tr className="result">
            <th scope="row" className="result__id">
                <Link to={to}>{id}</Link>
            </th>
            <td className="result__text">
                <span className="leader">{text}</span>
            </td>
            <td className="result__value">{value}</td>
            <td className="result__stamp">
                <Stamp label={t.passed} order={order}>{t.pass}</Stamp>
            </td>
        </tr>
    );
}

export function Acceptance({ compact = false }) {
    const { t } = useLang();
    return (
        <div className={compact ? 'accept accept--compact' : 'accept'}>
            <div className="accept__label">
                <span className="label">{t.acceptance}</span>
                <p className="accept__note">{t.acceptanceNote}</p>
            </div>
            <div className="accept__actions">
                <a className="button" href="#signoff">
                    {t.contactMe}
                    <Arrow />
                </a>
                <a className="link" href={CV} download="Samuel_Bruno_CV.pdf">
                    {t.downloadCv}
                </a>
            </div>
            <div className="accept__signature" aria-hidden="true">
                <div className="accept__sign">
                    <span className="accept__x">X</span>
                    <span className="accept__line"></span>
                </div>
                <div className="accept__meta">
                    <span className="label">{t.signature}</span>
                    <span className="label">{t.date} ____ / ____ / 20____</span>
                </div>
            </div>
        </div>
    );
}

export function SignOff() {
    const { t } = useLang();
    const rows = [
        { label: t.email, value: contact.email, href: `mailto:${contact.email}` },
        { label: t.whatsapp, value: contact.whatsappDisplay, href: contact.whatsappUrl, external: true },
        { label: t.linkedin, value: contact.linkedinDisplay, href: contact.linkedinUrl, external: true },
    ];
    return (
        <section className="signoff" aria-labelledby="signoff">
            <div className="perforation" aria-hidden="true"></div>
            <div className="sheet">
                <SectionBar id="signoff">{t.signOff}</SectionBar>
                <p className="signoff__lead">{t.signOffLead}</p>
                <dl className="signoff__fields">
                    {rows.map(({ label, value, href, external }) => (
                        <div className="field" key={label}>
                            <dt className="label">{label}</dt>
                            <dd>
                                <a
                                    className="fill fill--link"
                                    href={href}
                                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                                >
                                    {value}
                                </a>
                            </dd>
                        </div>
                    ))}
                </dl>
                <a className="link signoff__cv" href={CV} download="Samuel_Bruno_CV.pdf">
                    {t.downloadCv}
                </a>
            </div>
        </section>
    );
}

export function FormFooter() {
    const { t } = useLang();
    return (
        <footer className="footer">
            <div className="sheet footer__row">
                <span>{t.docNo} · {t.copyLabel}</span>
                <span>© {new Date().getFullYear()} Samuel Bruno. {t.rights}</span>
                <span>samuelbruno.com</span>
            </div>
        </footer>
    );
}

// A flat staple whose legs pass through the top border of the photo print.
export function Staple() {
    return (
        <svg className="staple" width="64" height="22" viewBox="0 0 64 22" aria-hidden="true">
            <path d="M5 20V6h54v14" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="miter" />
            <path d="M5 20h-2M59 20h2" stroke="var(--ink)" strokeWidth="3" opacity="0.35" />
        </svg>
    );
}

export function Arrow({ back = false }) {
    return (
        <svg className={back ? 'arrow arrow--back' : 'arrow'} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        </svg>
    );
}

export function Check() {
    return (
        <svg className="check" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <rect x="1" y="1" width="16" height="16" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
            <path d="M4 9.5l3.2 3L14.5 4" fill="none" stroke="var(--carbon)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
