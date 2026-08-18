"use client";

/* eslint-disable @next/next/no-img-element -- Static GitHub Pages build uses public SVG assets. */

import { useState } from "react";

const durations = [30, 60, 120];
const residentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfgNYkt0JN6puykb5vSNCORkcOaYT9ZTpZaZV_o0u2e3yZl_g/viewform?embedded=true";
const volunteerFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScA9XsiBg8_PA2AdQR7tJfPcbIEtU4WMjj0QtSxKxkMooFLbw/viewform?embedded=true";

export default function Home() {
  const [duration, setDuration] = useState(60);

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Help Nearby home">
          <img className="brand-logo" src="./help-nearby-logo.svg" alt="Help Nearby" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#ai-assistance">How AI helps</a>
          <a href="#help">What we help with</a>
          <a href="#safety">Safety</a>
          <a className="nav-cta" href="#volunteer">Volunteer nearby</a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" aria-hidden="true" />Opening neighbourhood by neighbourhood</div>
            <h1>A little time can make a big difference nearby.</h1>
            <p className="hero-lede">Help Nearby connects residents who need simple digital assistance with trusted volunteers who have 30, 60, or 120 minutes to spare.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#request">Request pilot help</a>
              <a className="button button-secondary" href="#volunteer">Volunteer nearby</a>
            </div>
            <p className="hero-note">Free to use · Non-emergency help · Human-coordinated pilot</p>
          </div>

          <div className="matching-preview" aria-label="Example of a nearby volunteer match">
            <div className="preview-topline"><span>Nearby right now</span><span className="live-label"><i aria-hidden="true" /> Pilot preview</span></div>
            <article className="request-card">
              <div className="request-icon" aria-hidden="true">Aa</div>
              <div><span className="card-label">Resident request</span><h2>Help enlarge the text on my phone</h2><p>Common area · About 30 minutes</p></div>
            </article>
            <div className="match-line" aria-hidden="true"><span /></div>
            <article className="volunteer-card">
              <div className="avatar" aria-hidden="true">J</div>
              <div className="volunteer-copy"><span className="card-label">Volunteer available</span><h2>Jamie has 60 minutes nearby</h2><p>Digital help · Within 2 km</p></div>
              <span className="match-badge">Good fit</span>
            </article>
            <div className="availability-row"><span>Spare time</span><div className="time-options" aria-label="Example availability options"><span>30m</span><span className="active">60m</span><span>120m</span></div></div>
          </div>
        </section>

        <section className="section ai-section" id="ai-assistance">
          <div className="ai-heading">
            <span className="section-kicker">Thoughtful technology, human decisions</span>
            <h2>AI helps organise the work. People make the match.</h2>
            <p>Help Nearby uses AI agents to support the pilot behind the scenes—from building the service to turning requests into clear, reviewable information.</p>
          </div>
          <div className="ai-grid">
            <article><span>01</span><h3>Build and improve</h3><p>AI coding agents help us prototype, test, and improve the service quickly while we learn from residents and volunteers.</p></article>
            <article><span>02</span><h3>Structure each request</h3><p>AI can organise free-text requests by task, location, timing, and estimated duration, helping coordinators review them consistently.</p></article>
            <article><span>03</span><h3>Suggest suitable pairings</h3><p>A matching algorithm can suggest volunteers whose area, available time, and digital skills fit the request.</p></article>
          </div>
          <p className="ai-note"><strong>Human-in-the-loop:</strong> AI never approves volunteers, promises fulfilment, or dispatches anyone automatically. A coordinator reviews every pilot match.</p>
        </section>

        <section className="trust-row" aria-label="Pilot principles">
          <div><strong>Simple digital help</strong><span>Practical, everyday guidance</span></div>
          <div><strong>Common areas first</strong><span>Meet in familiar public spaces</span></div>
          <div><strong>People stay in control</strong><span>Every pilot match is reviewed</span></div>
        </section>

        <section className="section intro-section" id="how-it-works">
          <div className="section-heading">
            <span className="section-kicker">How it works</span>
            <h2>Neighbourly help, without the heavy commitment.</h2>
            <p>Residents ask for one small piece of digital help. Volunteers share a pocket of free time. Help Nearby brings the two together and checks every pilot match.</p>
          </div>
          <div className="steps-grid">
            <article><span className="step-number">01</span><h3>Tell us what you need</h3><p>Describe a simple digital task and when you would like to meet in a nearby common area.</p></article>
            <article><span className="step-number">02</span><h3>We review the request</h3><p>A human coordinator checks that the request is suitable, safe, and clear before contacting volunteers.</p></article>
            <article><span className="step-number">03</span><h3>Meet someone nearby</h3><p>If a suitable volunteer is available, we introduce both sides and confirm the time and meeting place.</p></article>
          </div>
        </section>

        <section className="section help-section" id="help">
          <div className="help-copy">
            <span className="section-kicker">Start with the basics</span>
            <h2>Technology should make daily life easier—not leave anyone behind.</h2>
            <p>Our first pilot focuses only on straightforward digital assistance. Volunteers guide; residents keep control of their own devices and private information.</p>
            <div className="boundary-note"><span aria-hidden="true">!</span><p><strong>We will never ask for passwords.</strong> Help Nearby does not support banking, payments, medical care, transport, or emergencies.</p></div>
          </div>
          <div className="task-grid">
            <article><span className="task-symbol" aria-hidden="true">T</span><h3>Device settings</h3><p>Text size, brightness, accessibility features, and everyday settings.</p></article>
            <article><span className="task-symbol" aria-hidden="true">↗</span><h3>Calls and messages</h3><p>Video calls, contact lists, messaging apps, and sharing photos.</p></article>
            <article><span className="task-symbol" aria-hidden="true">□</span><h3>Online forms</h3><p>Understanding public-service websites and navigating simple forms.</p></article>
            <article><span className="task-symbol" aria-hidden="true">?</span><h3>General guidance</h3><p>Learning how an app works and recognising common online warning signs.</p></article>
          </div>
        </section>

        <section className="section time-section">
          <div className="time-card">
            <div className="time-card-copy">
              <span className="section-kicker light">For volunteers</span>
              <h2>Give the time you already have.</h2>
              <p>No fixed shifts. No long-term commitment. Share a free window, choose how far you can travel, and only accept tasks that feel right for you.</p>
              <a className="text-link light-link" href="#volunteer">Join the pilot <span aria-hidden="true">→</span></a>
            </div>
            <div className="time-selector" aria-label="Choose an example availability window">
              <span className="selector-label">I have time for</span>
              <div className="duration-buttons">
                {durations.map((minutes) => (
                  <button key={minutes} type="button" className={duration === minutes ? "selected" : ""} onClick={() => setDuration(minutes)} aria-pressed={duration === minutes}>
                    <strong>{minutes}</strong><span>minutes</span>
                  </button>
                ))}
              </div>
              <div className="selector-result"><span className="pulse-dot" aria-hidden="true" /><p><strong>{duration} minutes available</strong><br />We would only show requests that fit.</p></div>
            </div>
          </div>
        </section>

        <section className="section safety-section" id="safety">
          <div className="section-heading narrow">
            <span className="section-kicker">Safety before scale</span>
            <h2>Small, clear boundaries help everyone feel comfortable.</h2>
          </div>
          <div className="safety-grid">
            <article><span aria-hidden="true">18+</span><h3>Approved volunteers</h3><p>Pilot volunteers must be at least 18 and complete a basic identity and safety review.</p></article>
            <article><span aria-hidden="true">⌂</span><h3>Common areas</h3><p>First meetings happen in familiar shared spaces—not inside private homes.</p></article>
            <article><span aria-hidden="true">✓</span><h3>Human review</h3><p>Every request is checked before a volunteer is contacted. There is no automatic dispatch.</p></article>
            <article><span aria-hidden="true">×</span><h3>Clear exclusions</h3><p>No money handling, passwords, banking, medication, personal care, transport, or emergencies.</p></article>
          </div>
        </section>

        <section className="section forms-section">
          <div className="form-shell resident-form" id="request">
            <div className="form-intro">
              <span className="section-kicker">For residents</span>
              <h2>Request pilot help</h2>
              <p>Tell us what would make technology a little easier. We will follow up personally if the pilot is available near you.</p>
            </div>
            <div className="embedded-form-frame">
              <iframe src={residentFormUrl} title="Request Help Nearby form" loading="lazy" />
            </div>
            <p className="form-privacy-note">Your response goes directly into Help Nearby&apos;s private operations workspace.</p>
          </div>

          <div className="form-shell volunteer-form" id="volunteer">
            <div className="form-intro">
              <span className="section-kicker">For volunteers</span>
              <h2>Share your spare time</h2>
              <p>Join the pilot interest list. When Help Nearby opens in your area, you can choose when, where, and how you help.</p>
            </div>
            <div className="embedded-form-frame">
              <iframe src={volunteerFormUrl} title="Volunteer with Help Nearby form" loading="lazy" />
            </div>
            <p className="form-privacy-note">Your response goes directly into Help Nearby&apos;s private operations workspace.</p>
          </div>
        </section>

        <section className="section partner-section">
          <div><span className="section-kicker light">For community organisations</span><h2>Help us open the right neighbourhood first.</h2></div>
          <div><p>We are looking for organisations that know local residents, can offer a familiar common space, and want to explore a simple digital-help pilot.</p><a className="button partner-button" href="mailto:help.nearbysg@gmail.com">Discuss a pilot</a></div>
        </section>

        <section className="section faq-section">
          <div className="section-heading narrow"><span className="section-kicker">Questions, answered plainly</span><h2>Before you take part</h2></div>
          <div className="faq-list">
            <details><summary>Is Help Nearby an emergency service?<span aria-hidden="true">+</span></summary><p>No. Help Nearby is only for simple, non-urgent digital assistance. For emergencies, contact the appropriate emergency service.</p></details>
            <details><summary>Does it cost anything?<span aria-hidden="true">+</span></summary><p>No. The pilot is free for residents, and volunteers are not paid or tipped.</p></details>
            <details><summary>Will a volunteer handle my phone or password?<span aria-hidden="true">+</span></summary><p>You should remain in control of your device. Volunteers must never request passwords, banking details, or access to private accounts.</p></details>
            <details><summary>Does submitting a form guarantee help?<span aria-hidden="true">+</span></summary><p>No. The pilot will open in selected areas, and every request depends on suitability and volunteer availability.</p></details>
            <details><summary>Why start with digital assistance?<span aria-hidden="true">+</span></summary><p>It is a common, practical need that can often be solved in a short session without money, transport, or entering a private home.</p></details>
          </div>
        </section>
      </div>

      <footer>
        <a className="brand footer-brand" href="#top"><img className="brand-logo" src="./help-nearby-logo.svg" alt="Help Nearby" /></a>
        <p>Small moments of spare time, matched with simple needs nearby.</p>
        <span>Non-profit pilot concept · Singapore</span>
      </footer>
    </main>
  );
}
