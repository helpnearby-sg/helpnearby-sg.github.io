"use client";

/* eslint-disable @next/next/no-img-element -- Static GitHub Pages build uses public SVG assets. */

import { useState } from "react";

const durations = [10, 20, 30, 60];
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
            <div className="eyebrow"><span className="status-dot" aria-hidden="true" />AI-assisted community matching</div>
            <h1>Turn spare time into help nearby.</h1>
            <p className="hero-lede">Help Nearby connects residents who need simple, everyday assistance with volunteers who have 10, 20, 30, or 60 minutes to help—by call or in a nearby common area.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#request">Request pilot help</a>
              <a className="button button-secondary" href="#volunteer">Volunteer nearby</a>
            </div>
            <p className="hero-note">Free to use · Voice or video call · Common-area meet-up · Human-reviewed pilot</p>
          </div>

          <div className="matching-preview" aria-label="Example of a nearby volunteer match">
            <div className="preview-topline"><span>Nearby right now</span><span className="live-label"><i aria-hidden="true" /> Pilot preview</span></div>
            <article className="request-card">
              <div className="request-icon" aria-hidden="true">Aa</div>
              <div><span className="card-label">Resident request</span><h2>Help me collect a parcel</h2><p>Nearby common area · About 20 minutes</p></div>
            </article>
            <div className="match-line" aria-hidden="true"><span /></div>
            <article className="volunteer-card">
              <div className="avatar" aria-hidden="true">J</div>
              <div className="volunteer-copy"><span className="card-label">Volunteer available</span><h2>Jamie has 20 minutes now</h2><p>Errands and practical help · Available nearby</p></div>
              <span className="match-badge">AI suggested</span>
            </article>
            <div className="availability-row"><span>Spare time</span><div className="time-options" aria-label="Example availability options"><span>10m</span><span className="active">20m</span><span>30m</span><span>60m</span></div></div>
          </div>
        </section>

        <section className="section ai-section" id="ai-assistance">
          <div className="ai-heading">
            <span className="section-kicker">Thoughtful technology, human decisions</span>
            <h2>An AI agent turns spare moments into clear match suggestions.</h2>
            <p>Help Nearby uses AI agents to build and improve the service, understand each request, and identify suitable volunteers. People remain in control at every step.</p>
          </div>
          <div className="ai-grid">
            <article><span>01</span><h3>Build and improve</h3><p>AI coding agents help us prototype, test, and improve the service quickly while we learn from residents and volunteers.</p></article>
            <article><span>02</span><h3>Understand the request</h3><p>An intake agent can organise the task, preferred call or meeting mode, timing, location, and likely duration for review.</p></article>
            <article><span>03</span><h3>Recommend a match</h3><p>A matching agent can rank volunteers by skills, availability, distance, language, and whether they can help remotely.</p></article>
          </div>
          <p className="ai-note"><strong>Human-in-the-loop:</strong> AI never approves volunteers, promises fulfilment, or dispatches anyone automatically. A coordinator reviews every pilot match.</p>
        </section>

        <section className="trust-row" aria-label="Pilot principles">
          <div><strong>Simple everyday help</strong><span>Practical, clearly defined tasks</span></div>
          <div><strong>Call or common area</strong><span>Choose remote guidance or a public meeting</span></div>
          <div><strong>People stay in control</strong><span>Every pilot match is reviewed</span></div>
        </section>

        <section className="section intro-section" id="how-it-works">
          <div className="section-heading">
            <span className="section-kicker">How it works</span>
            <h2>Neighbourly help, without the heavy commitment.</h2>
            <p>Residents ask for help with one small everyday task. Volunteers share a short pocket of spare time. Help Nearby brings the two together and checks every pilot match.</p>
          </div>
          <div className="steps-grid">
            <article><span className="step-number">01</span><h3>Tell us what you need</h3><p>Describe a simple, non-urgent task and whether you prefer help by voice or video call, or in a nearby common area.</p></article>
            <article><span className="step-number">02</span><h3>We review the request</h3><p>A human coordinator checks that the request is suitable, safe, and clear before contacting volunteers.</p></article>
            <article><span className="step-number">03</span><h3>Connect safely</h3><p>If a suitable volunteer is available, we confirm a guided call or a time and public meeting place that works for both sides.</p></article>
          </div>
        </section>

        <section className="section help-section" id="help">
          <div className="help-copy">
            <span className="section-kicker">Help with the small things</span>
            <h2>Everyday tasks feel lighter when someone nearby can help.</h2>
            <p>Our pilot focuses on straightforward, short tasks that can be completed safely by call or in a familiar common area.</p>
            <div className="boundary-note"><span aria-hidden="true">!</span><p><strong>Clear boundaries keep the pilot safe.</strong> No cash handling, banking, passwords, medication, medical care, transport, heavy lifting, personal care, or emergency requests.</p></div>
          </div>
          <div className="task-grid">
            <article><span className="task-symbol" aria-hidden="true">□</span><h3>Parcel or grocery collection</h3><p>Collecting prepaid items nearby and bringing them to an agreed common area.</p></article>
            <article><span className="task-symbol" aria-hidden="true">↗</span><h3>Simple shopping</h3><p>Picking up a small prepaid purchase without volunteers advancing or handling money.</p></article>
            <article><span className="task-symbol" aria-hidden="true">T</span><h3>Device and online guidance</h3><p>Everyday settings, video calls, messaging apps, and understanding simple online forms.</p></article>
            <article><span className="task-symbol" aria-hidden="true">?</span><h3>General practical help</h3><p>Other short, non-urgent requests that fit the pilot&apos;s safety boundaries.</p></article>
          </div>
        </section>

        <section className="section time-section">
          <div className="time-card">
            <div className="time-card-copy">
              <span className="section-kicker light">For volunteers</span>
              <h2>Your spare time is enough.</h2>
              <p>No fixed shifts. No long-term commitment. Share 10, 20, 30, or 60 minutes, choose call or nearby help, and only accept tasks that feel right for you.</p>
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
            <article><span aria-hidden="true">⌂</span><h3>Call or common area</h3><p>Help can happen remotely. In-person pilot meetings use familiar shared spaces—not private homes.</p></article>
            <article><span aria-hidden="true">✓</span><h3>Human review</h3><p>Every request is checked before a volunteer is contacted. There is no automatic dispatch.</p></article>
            <article><span aria-hidden="true">×</span><h3>Clear exclusions</h3><p>No cash handling, banking, passwords, medication, medical care, transport, heavy lifting, personal care, or emergencies.</p></article>
          </div>
        </section>

        <section className="section forms-section">
          <div className="form-shell resident-form" id="request">
            <div className="form-intro">
              <span className="section-kicker">For residents</span>
              <h2>Get help with one small everyday task.</h2>
              <p>Choose a short time window and tell us whether a call or nearby help would suit you.</p>
            </div>
            <div className="embedded-form-frame">
              <iframe src={residentFormUrl} title="Request Help Nearby form" loading="lazy" />
            </div>
            <p className="form-privacy-note">Your response goes directly into Help Nearby&apos;s private operations workspace.</p>
          </div>

          <div className="form-shell volunteer-form" id="volunteer">
            <div className="form-intro">
              <span className="section-kicker">For volunteers</span>
              <h2>Make a spare moment useful.</h2>
              <p>Offer 10, 20, 30, or 60 minutes by call or nearby, without committing to a fixed shift.</p>
            </div>
            <div className="embedded-form-frame">
              <iframe src={volunteerFormUrl} title="Volunteer with Help Nearby form" loading="lazy" />
            </div>
            <p className="form-privacy-note">Your response goes directly into Help Nearby&apos;s private operations workspace.</p>
          </div>
        </section>

        <section className="section partner-section">
          <div><span className="section-kicker light">For community organisations</span><h2>Help us open the right neighbourhood first.</h2></div>
          <div><p>We are looking for organisations that know local residents, can offer a familiar common space, and want to explore a simple community-help pilot.</p><a className="button partner-button" href="mailto:help.nearbysg@gmail.com">Discuss a pilot</a></div>
        </section>

        <section className="section faq-section">
          <div className="section-heading narrow"><span className="section-kicker">Questions, answered plainly</span><h2>Before you take part</h2></div>
          <div className="faq-list">
            <details><summary>Is Help Nearby an emergency service?<span aria-hidden="true">+</span></summary><p>No. Help Nearby is only for simple, non-urgent everyday requests. For emergencies, contact the appropriate emergency service.</p></details>
            <details><summary>Can I get help through a call?<span aria-hidden="true">+</span></summary><p>Yes. Suitable requests may be handled through a guided voice or video call. You stay in control of your device and should never reveal passwords or private account details.</p></details>
            <details><summary>Does it cost anything?<span aria-hidden="true">+</span></summary><p>No. The pilot is free for residents, and volunteers are not paid or tipped.</p></details>
            <details><summary>Will a volunteer handle my phone or password?<span aria-hidden="true">+</span></summary><p>You should remain in control of your device. Volunteers must never request passwords, banking details, or access to private accounts.</p></details>
            <details><summary>Does submitting a form guarantee help?<span aria-hidden="true">+</span></summary><p>No. The pilot will open in selected areas, and every request depends on suitability and volunteer availability.</p></details>
            <details><summary>What kind of help can I request?<span aria-hidden="true">+</span></summary><p>Short, clearly defined tasks such as collecting a prepaid parcel or grocery order, simple prepaid shopping, device setup, online forms, and general digital guidance.</p></details>
          </div>
        </section>
      </div>

      <footer>
        <a className="brand footer-brand" href="#top"><img className="brand-logo" src="./help-nearby-logo.svg" alt="Help Nearby" /></a>
        <p>Spare time, matched with simple needs nearby.</p>
        <span>Non-profit pilot concept · Singapore</span>
      </footer>
    </main>
  );
}
