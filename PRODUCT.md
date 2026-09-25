# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two confirmed audiences, served by the same site:

- **Hiring side:** recruiters, CTOs and engineering managers evaluating Samuel for a Software Engineer / Technical Lead role. Their job: decide within minutes whether to open a conversation (interview, call).
- **Client side:** companies and SMEs looking for someone to build or integrate software (automations, CRM, IoT, web and mobile apps). Their job: judge whether Samuel can solve their specific problem and start a conversation about a project.

Both arrive mostly from a shared link (CV, LinkedIn, message) and read on desktop or phone.

## Product Purpose

Personal professional site for Samuel Bruno at samuelbruno.com. It exists to make one identity legible, **Software Engineer | Technical Lead**, and to turn a qualified visitor into a direct contact. Success: the visitor understands what Samuel does and at what level within the first screen, finds credible evidence, and writes by email or WhatsApp.

## Positioning

An engineer who leads delivery end to end across layers most profiles split: workflow automation (n8n), full-stack web (Next.js, Node.js, SQL Server), cross-platform mobile (Flutter, store releases), IoT and hardware integration (USB, BLE, real-time data), CRM customization (SuiteCRM, OCR import pipelines), industrial data collection and reporting, plus technical leadership (architecture, code review, mentoring, prototype-to-production ownership). The claim is breadth held together by ownership of real production systems, not a generic "full-stack developer".

## Operating Context

- Source of truth for career facts: `Samuel_Bruno_CV.pdf` (the CV shared on 2026-09-25).
- Current role: **Software Engineer & Technical Lead at C2T**, Catania, 2020–present. C2T is a 10-person consultancy. Samuel is the main technical reference for 3 enterprise clients at once (manufacturing, sports tech, medical research), leads a team of 3 (frontend dev, backend dev, UI/UX designer), and covers business analyst, engineer, tech lead and project manager duties.
- Education: Bachelor's in Computer Engineering, University of Catania (2023–in progress). Diploma in IT & Telecommunications, State Technical Institute (2015–2020, 100/100).
- Certifications: AI Fluency: Framework & Foundations; AI Fluency for Builders; Claude Code 101; Claude Platform 101; Building with the Claude API.
- Languages: Italian (native), English (B2, professional).
- Visitors often come from the downloadable CV (`src/assets/CV.pdf`) and LinkedIn; the site and the CV must tell the same story.
- Deployed at samuelbruno.com (Firebase Hosting per `firebase.json`, or rsync to a self-hosted server per README).

## Capabilities and Constraints

- Existing codebase: Create React App, React 18, react-router 6, Swiper, icon fonts via CDN.
- **Bilingual IT/EN** with a language switch; every piece of copy needs both versions.
- Contact channels: **email** (samuelbruno2001@icloud.com) and **WhatsApp** (+39 388 649 7834, must be written with the international prefix). No on-site form, no Messenger, no booking tool.
- Profiles: **LinkedIn only**: https://www.linkedin.com/in/samuel-bruno-lnkd/ (given by the user, matches the CV). No GitHub, Instagram, Dribbble, Facebook or Twitter links.
- The personal route `/lacuriositatiportaqui/:pr` (Curiosity) is to be **removed** from the site, along with its stylesheet.
- Career facts follow the CV; the old template timeline (Lead Developer Analyst / Product Designer / UX Designer, Figma, RoboCup) is superseded.

## Brand Commitments

- Name: Samuel Bruno. Title: Software Engineer | Technical Lead.
- The "Visual Designer" identity and the "Augusta" location from the template are wrong and must not reappear.
- Real photos exist: `src/assets/profile.png`, `src/assets/about.jpg`.

## Evidence on Hand

- The service descriptions in `src/components/services/Services.jsx` (8 areas, factual).
- CV: `src/assets/CV.pdf`.
- Named employer and role (C2T, Lead Developer Analyst).
- **Selected projects, citable by name with the facts stated in the CV** (no screenshots; do not add metrics beyond these):
  - **TrainerApp**: Full-Stack Developer & Project Manager (~18 months as PM). Flutter, Node.js, REST, BLE, Firebase. Sports-performance app used by 600+ gyms, trainers and pro organizations (football, basketball, tennis, golf); BLE with custom hardware sampling at 1,000 Hz; live force/power/ROM; real-time charts under 100 ms visual latency.
  - **Caronte**: Full-Stack Developer. React, WebSocket, PostgreSQL. Industrial IoT monitoring platform deployed in 20+ manufacturing companies; sole owner of the frontend from concept to production; real-time dashboards for machine status, production orders, alarms and automation control.
  - **Medical**: Lead Flutter Developer. Private therapeutic mobile app integrated with proprietary medical hardware over WebSocket, supporting active Alzheimer's-prevention research; UI/UX from concept to release.
  - **ImportYourCard**: Full-Stack Developer. Flutter, Google Vision OCR. iOS/Android app that extracts contacts from business cards; published on App Store and Google Play.
  - **Polimer ING**: Full-Stack Developer. Next.js, SQL Server. Industrial analytics platform with configurable dashboards and dynamic questionnaires.
- Beyond the CV's own statements, project details stay under NDA: no screenshots, no confidential metrics.
- **Absent, must not be fabricated:** testimonials (the current ones are template stock and must be removed), client logos, project counts, "24/7 support", ratings, metrics. The `work1–5.jpg` and `testimonial*.png` assets are template placeholders, not real work.

## Product Principles

1. **Only true things.** Every claim, stat, name and link must be real and verifiable; an empty spot beats a filler one.
2. **Work over adjectives.** Show what was built and how (NDA-safe case narratives) instead of skill badges and self-descriptions.
3. **One identity, two readers.** The same "Software Engineer | Technical Lead" story must answer both "should we hire Samuel?" and "can Samuel build this for us?" without splitting into two sites.
4. **Contact is one step away.** Email and WhatsApp are always reachable and always work.
5. **Parity across languages.** Italian and English are equal citizens; neither is a partial translation.

## Accessibility & Inclusion

Target WCAG 2.2 AA: visible keyboard focus, AA text contrast, labelled icon links, correct heading outline, `prefers-reduced-motion` respected. The current build fails all of these (see `.impeccable/critique/`).
