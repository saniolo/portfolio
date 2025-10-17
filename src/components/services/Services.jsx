import React, { useState } from 'react'
import './services.css'

const SERVICES = [
    {
        icon: 'uil uil-sync',
        title: 'Workflow Automation & Integration',
        blurb: 'n8n • Node.js • REST APIs • Webhooks',
        bullets: [
            'Design and deployment of automation pipelines with n8n',
            'Integration of APIs, databases, and AI services',
            'Development of custom nodes and triggers',
            'Optimization of CRM and reporting workflows',
            'Self-hosted, scalable automations for data-driven businesses',
        ],
    },
    {
        icon: 'uil uil-brackets-curly',
        title: 'Full-Stack Web Development',
        blurb: 'Next.js • Node.js • REST APIs • SQL Server',
        bullets: [
            'Design and build scalable web apps',
            'Secure API development & integrations',
            'Real-time dashboards and admin back-offices',
        ],
    },
    {
        icon: 'uil uil-mobile-android',
        title: 'Mobile Apps (Flutter)',
        blurb: 'iOS & Android • Store deployment • Analytics',
        bullets: [
            'Cross-platform apps in production',
            'App Store / Play Store release management',
            'Auth, offline-first and performance tuning',
        ],
    },
    {
        icon: 'uil uil-object-group',
        title: 'UI/UX Design & Prototyping',
        blurb: 'Research • Wireframes • Design Systems',
        bullets: [
            'Product discovery & user flows',
            'High-fidelity prototypes and design systems',
            'Accessibility & usability reviews',
        ],
    },
    {
        icon: 'uil uil-processor',
        title: 'IoT & Hardware Integration',
        blurb: 'USB • BLE • WebSocket • Real-time charts',
        bullets: [
            'Device communication (USB/BLE)',
            'Real-time data acquisition & visualization',
            'Alerts, faults and operational insights',
        ],
    },
    {
        icon: 'uil uil-database',
        title: 'CRM Solutions (SuiteCRM)',
        blurb: 'Custom modules • Workflows • Automation',
        bullets: [
            'Custom CRM modules and data models',
            'OCR/data import pipelines',
            'Process automation across teams',
        ],
    },
    {
        icon: 'uil uil-chart-line',
        title: 'Data Collection & Reporting',
        blurb: 'Industrial surveys • KPIs • Compliance',
        bullets: [
            'Dynamic questionnaires & polymer tracking',
            'Production flow insights & reporting',
            'Sustainability/compliance dashboards',
        ],
    },
    {
        icon: 'uil uil-users-alt',
        title: 'Technical Leadership',
        blurb: 'Architecture • Best practices • Delivery',
        bullets: [
            'Tech stack selection & code reviews',
            'Mentoring and team enablement',
            'Prototype-to-production ownership',
        ],
    },
];

const Services = () => {
    const [toggle, setToggle] = useState(-1);

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                {SERVICES.map((s, i) => (
                    <div className="services__content" key={s.title}>
                        <div>
                            <i className={`${s.icon} services__icon`}></i>
                            <h3 className="services__title">{s.title}</h3>
                            <p className="services__subtitle">{s.blurb}</p>
                        </div>

                        <span className="services__button" onClick={() => setToggle(i)}>
                            View More <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>

                        <div className={toggle === i ? 'services__modal active-modal' : 'services__modal'}>
                            <div className="services__modal-content">
                                <i onClick={() => setToggle(-1)} className="uil uil-times services__modal-close"></i>
                                <h3 className="services__modal-title">{s.title}</h3>
                                <p className="services__modal-description">
                                    Service based on real, production-grade projects.
                                </p>
                                <ul className="services__modal-services grid">
                                    {s.bullets.map((b) => (
                                        <li className="services__modal-service" key={b}>
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">{b}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services