import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang, pick } from './lang';
import { FormStrip, SectionBar, ResultRow, Acceptance, SignOff, FormFooter, Arrow, Check, Staple } from './Sheet';
import { profile, headlineResults, projects, operator, instruments } from '../content/content';
import Portrait from '../assets/samuel-attachment.webp';

export default function Home() {
    const { lang, t } = useLang();
    const p = profile[lang];

    useEffect(() => {
        document.title = `Samuel Bruno · ${profile.role}`;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', p.metaDescription);
    }, [p]);

    const sections = [
        ['results', t.sections.results],
        ['schedule', t.sections.schedule],
        ['operator', t.sections.operator],
        ['instruments', t.sections.instruments],
        ['signoff', t.sections.signoff],
    ];

    return (
        <>
            <FormStrip>
                <nav className="eyelets" aria-label={t.index}>
                    <ol>
                        {sections.map(([id, label]) => (
                            <li key={id}>
                                <a href={`#${id}`}>{label}</a>
                            </li>
                        ))}
                    </ol>
                </nav>
            </FormStrip>

            <main id="content">
                <section className="sheet cover" aria-labelledby="subject">
                    <div className="cover__grid">
                        <div className="field field--subject">
                            <span className="label">{t.subject}</span>
                            <h1 className="fill fill--display" id="subject">{profile.name}</h1>
                        </div>

                        <figure className="attachment">
                            <div className="attachment__print">
                                <Staple />
                                <img src={Portrait} alt="Samuel Bruno" width="640" height="887" />
                            </div>
                            <figcaption className="label">{t.attachment}</figcaption>
                        </figure>

                        <div className="field field--role">
                            <span className="label">{t.role}</span>
                            <p className="fill fill--lg">{profile.role}</p>
                        </div>
                        <div className="field">
                            <span className="label">{t.base}</span>
                            <p className="fill">{p.base}</p>
                        </div>
                        <div className="field">
                            <span className="label">{t.service}</span>
                            <p className="fill">{p.service}</p>
                        </div>
                        <div className="field field--scope">
                            <span className="label">{t.scope}</span>
                            <p className="fill fill--prose">{p.scope}</p>
                        </div>
                    </div>

                    <table className="results" id="results">
                        <caption className="visually-hidden">{t.sections.results}</caption>
                        <thead>
                            <tr>
                                <th scope="col" className="label">{t.test}</th>
                                <th scope="col" className="label">{t.description}</th>
                                <th scope="col" className="label result__value-head">{t.measured}</th>
                                <th scope="col" className="label result__stamp-head">{t.result}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {headlineResults.map((r, i) => {
                                const proj = projects.find((x) => x.slug === r.project);
                                return (
                                    <ResultRow
                                        key={i}
                                        id={r.check}
                                        to={`/projects/${proj.slug}`}
                                        text={r.text[lang]}
                                        value={r.value[lang]}
                                        order={i}
                                        t={t}
                                    />
                                );
                            })}
                        </tbody>
                    </table>

                    <Acceptance />
                </section>

                <section className="sheet block" aria-labelledby="schedule">
                    <SectionBar id="schedule">{t.schedule}</SectionBar>
                    <ol className="schedule">
                        {projects.map((proj) => {
                            const c = proj[lang];
                            return (
                                <li className="schedule__row" key={proj.slug}>
                                    <span className="schedule__id">{proj.id}</span>
                                    <div className="schedule__main">
                                        <h3 className="schedule__name">
                                            <Link to={`/projects/${proj.slug}`} className="stretch">
                                                {proj.name}
                                            </Link>
                                        </h3>
                                        <p className="schedule__meta">
                                            {c.sector} · {c.role}
                                        </p>
                                    </div>
                                    <p className="schedule__key">
                                        {c.key.value && <span className="schedule__value">{c.key.value}</span>}
                                        <span className="schedule__keytext">{c.key.text}</span>
                                    </p>
                                    <span className="schedule__open">
                                        <span className="schedule__opentext">{t.openSheet}</span>
                                        <Arrow />
                                    </span>
                                </li>
                            );
                        })}
                    </ol>
                </section>

                <section className="sheet block" aria-labelledby="operator">
                    <SectionBar id="operator">{t.operator}</SectionBar>
                    <div className="record">
                        <div className="field">
                            <span className="label">{t.employer}</span>
                            <p className="fill fill--lg">{operator.employer}</p>
                        </div>
                        <div className="field">
                            <span className="label">{t.position}</span>
                            <p className="fill fill--lg">{operator.position}</p>
                        </div>
                        <div className="field">
                            <span className="label">{t.location}</span>
                            <p className="fill">{operator.location[lang]}</p>
                        </div>
                        <div className="field">
                            <span className="label">{t.period}</span>
                            <p className="fill fill--mono">{operator.period[lang]}</p>
                        </div>
                    </div>

                    <div className="duties">
                        <span className="label">{t.duties}</span>
                        <ul className="checklist">
                            {operator.duties[lang].map((d) => (
                                <li key={d}>
                                    <Check />
                                    <span>{d}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="record record--three">
                        <div className="field">
                            <span className="label">{t.education}</span>
                            <ul className="plain">
                                {operator.education.map((e) => (
                                    <li key={e.title.en}>
                                        <span className="fill">{e.title[lang]}</span>
                                        <span className="plain__sub">{e.place[lang]}</span>
                                        <span className="plain__sub fill--mono">{e.period[lang]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="field">
                            <span className="label">{t.certifications}</span>
                            <ul className="plain">
                                {operator.certifications.map((c) => (
                                    <li key={c} className="fill">{c}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="field">
                            <span className="label">{t.languages}</span>
                            <ul className="plain">
                                {operator.languages[lang].map((l) => (
                                    <li key={l} className="fill">{l}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="sheet block" aria-labelledby="instruments">
                    <SectionBar id="instruments">{t.instruments}</SectionBar>
                    <dl className="instruments">
                        {instruments.map((row) => (
                            <div className="instruments__row" key={row.label.en}>
                                <dt className="label">{pick(row.label, lang)}</dt>
                                <dd className="fill">{pick(row.items, lang)}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <SignOff />
            </main>
            <FormFooter />
        </>
    );
}
