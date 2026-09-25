import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLang } from './lang';
import { FormStrip, Stamp, Acceptance, SignOff, FormFooter, Arrow, Check } from './Sheet';
import { projects } from '../content/content';
import NotFound from './NotFound';

export default function ProjectSheet() {
    const { slug } = useParams();
    const { lang, t } = useLang();
    const index = projects.findIndex((p) => p.slug === slug);
    const proj = projects[index];

    useEffect(() => {
        if (!proj) return;
        document.title = `${proj.id} ${proj.name} · Samuel Bruno`;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', proj[lang].summary);
    }, [proj, lang]);

    if (!proj) return <NotFound />;

    const c = proj[lang];
    // Countable results go in the measurements table; the rest are inspected facts.
    const checks = c.checks.map((check, i) => ({ ...check, id: `${proj.id}.${i + 1}` }));
    const measured = checks.filter((check) => check.value);
    const inspected = checks.filter((check) => !check.value);
    const prev = projects[index - 1];
    const next = projects[index + 1];

    return (
        <>
            <FormStrip>
                <Link to="/#schedule" className="strip__back">
                    <Arrow back />
                    {t.backToSchedule}
                </Link>
            </FormStrip>

            <main id="content">
                <article className="sheet cover cover--project" aria-labelledby="project-name">
                    <div className="project__grid">
                        <div className="field">
                            <span className="label">{t.sheet}</span>
                            <p className="fill fill--mono fill--lg">{proj.id}</p>
                        </div>
                        <div className="field project__name">
                            <span className="label">{t.project}</span>
                            <h1 className="fill fill--display" id="project-name">{proj.name}</h1>
                        </div>
                        <div className="field">
                            <span className="label">{t.role}</span>
                            <p className="fill">{c.role}</p>
                        </div>
                        <div className="field">
                            <span className="label">{t.sector}</span>
                            <p className="fill">{c.sector}</p>
                        </div>
                        <div className="field project__stack">
                            <span className="label">{t.stack}</span>
                            <p className="fill">{proj.stack.join(' · ')}</p>
                        </div>
                        <div className="field field--scope project__scope">
                            <span className="label">{t.scope}</span>
                            <p className="fill fill--prose">{c.summary}</p>
                        </div>
                    </div>

                    {measured.length > 0 && (
                        <table className="results">
                            <caption className="bar bar--caption">{t.measurements}</caption>
                            <thead>
                                <tr>
                                    <th scope="col" className="label">{t.test}</th>
                                    <th scope="col" className="label">{t.description}</th>
                                    <th scope="col" className="label result__value-head">{t.measured}</th>
                                    <th scope="col" className="label result__stamp-head">{t.result}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {measured.map((check, i) => (
                                    <tr className="result" key={check.text}>
                                        <th scope="row" className="result__id">{check.id}</th>
                                        <td className="result__text">
                                            <span className="leader">{check.text}</span>
                                        </td>
                                        <td className="result__value">{check.value}</td>
                                        <td className="result__stamp">
                                            <Stamp label={t.passed} order={i}>{t.pass}</Stamp>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {inspected.length > 0 && (
                        <section className="inspection" aria-labelledby="inspection">
                            <h2 className="bar" id="inspection">{t.inspection}</h2>
                            <ul className="inspection__list">
                                {inspected.map((check) => (
                                    <li key={check.text}>
                                        <span className="result__id">{check.id}</span>
                                        <span className="inspection__text">{check.text}</span>
                                        <span className="inspection__result">
                                            <Check />
                                            <span className="label">{t.complies}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <section className="work" aria-labelledby="work">
                        <h2 className="bar" id="work">{t.workPerformed}</h2>
                        <ol className="work__list">
                            {c.work.map((w) => (
                                <li key={w}>{w}</li>
                            ))}
                        </ol>
                    </section>

                    <nav className={prev && next ? 'pager' : 'pager pager--single'} aria-label={t.index}>
                        {prev && (
                            <Link to={`/projects/${prev.slug}`} className="pager__link">
                                <span className="label">{t.previous}</span>
                                <span className="fill">
                                    <Arrow back /> {prev.id} {prev.name}
                                </span>
                            </Link>
                        )}
                        {next && (
                            <Link to={`/projects/${next.slug}`} className="pager__link pager__link--next">
                                <span className="label">{t.next}</span>
                                <span className="fill">
                                    {next.id} {next.name} <Arrow />
                                </span>
                            </Link>
                        )}
                    </nav>

                    <Acceptance compact />
                </article>

                <SignOff />
            </main>
            <FormFooter />
        </>
    );
}
