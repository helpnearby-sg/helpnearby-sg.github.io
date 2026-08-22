"use client";

/* eslint-disable @next/next/no-img-element -- Static GitHub Pages build uses public SVG assets. */

import { useState } from "react";

const durations = [10, 20, 30, 60];
const residentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfgNYkt0JN6puykb5vSNCORkcOaYT9ZTpZaZV_o0u2e3yZl_g/viewform?embedded=true";
const volunteerFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScA9XsiBg8_PA2AdQR7tJfPcbIEtU4WMjj0QtSxKxkMooFLbw/viewform?embedded=true";

function LineIcon({ name }: { name: "pin" | "phone" | "parcel" | "device" | "shield" | "clock" | "people" | "arrow" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (name === "pin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M19 10.2c0 5.1-7 10.2-7 10.2S5 15.3 5 10.2a7 7 0 1 1 14 0Z" /><circle {...common} cx="12" cy="10" r="2.1" /></svg>;
  if (name === "phone") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M7.2 4.5 5.6 5.8c-.8.7-.9 1.8-.5 2.7 2.2 5.1 6.2 7.9 10.5 9.9.9.4 2 .1 2.6-.7l1.1-1.7-3.6-2.5-1.5 1.3c-2.2-1.1-4-2.7-5.2-4.8l1-1.7-2.8-3.8Z" /></svg>;
  if (name === "parcel") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m4.5 7.5 7.5-3 7.5 3v9l-7.5 3-7.5-3v-9Z" /><path {...common} d="m4.8 7.7 7.2 3 7.2-3M12 10.7v8.5M8.5 5.9 15.7 9" /></svg>;
  if (name === "device") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="6.5" y="3.8" width="11" height="16.4" rx="2" /><path {...common} d="M10 17.2h4M10.5 6.6h3" /></svg>;
  if (name === "shield") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 3.8 18.5 6v5.1c0 4.2-2.6 7.4-6.5 9.1-3.9-1.7-6.5-4.9-6.5-9.1V6L12 3.8Z" /><path {...common} d="m9.1 12 1.9 1.9 4-4" /></svg>;
  if (name === "clock") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle {...common} cx="12" cy="12" r="8" /><path {...common} d="M12 7.5v4.8l3 1.7" /></svg>;
  if (name === "people") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle {...common} cx="9" cy="8" r="2.8" /><path {...common} d="M3.8 18.5c.4-3 2.1-4.6 5.2-4.6s4.8 1.6 5.2 4.6M16.5 6.2a2.4 2.4 0 0 1 0 4.7M16.3 14c2.4.3 3.7 1.7 3.9 4.5" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 12h13M13 7l5 5-5 5" /></svg>;
}

export default function Home() {
  const [duration, setDuration] = useState(60);

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Help Nearby home">
          <img className="brand-logo" src="./help-nearby-logo.svg" alt="Help Nearby" />
          <span className="brand-wordmark">Help Nearby</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#ai-assistance">AI agent</a>
          <a href="#help">What we help with</a>
          <a href="#safety">Safety</a>
          <a className="nav-cta" href="#volunteer">Share your time <LineIcon name="arrow" /></a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="hero-location"><LineIcon name="pin" /> A small community-help pilot in Singapore</p>
            <h1>Small moments.<br /><span>Useful help.</span></h1>
            <p className="hero-lede">Help Nearby connects a resident with a suitable volunteer when a short, everyday task needs a little human help—by call or in a nearby common area.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#request">Request pilot help <LineIcon name="arrow" /></a>
              <a className="button button-secondary" href="#volunteer">Share a spare moment</a>
            </div>
            <p className="hero-note"><span className="signal-mark" aria-hidden="true" /> 10, 20, 30, or 60 minutes · free to use · human-reviewed pilot</p>
          </div>

          <div className="switchboard" aria-label="Illustration of an AI-assisted nearby match">
            <div className="switchboard-head">
              <div><span className="board-label">Help Nearby / pilot board</span><h2>One request.<br /><em>One suitable person.</em></h2></div>
              <span className="board-status"><i aria-hidden="true" /> Live example</span>
            </div>
            <div className="board-meta"><span>Tuesday · common area</span><span>Window 20 min</span></div>
            <article className="board-row request-row">
              <div className="row-icon"><LineIcon name="parcel" /></div>
              <div className="row-copy"><span className="row-label">Resident request</span><h3>Collect a prepaid parcel</h3><p>Near a shared neighbourhood space</p></div>
              <span className="row-time">20m</span>
            </article>
            <div className="match-bridge"><span><i aria-hidden="true" /> AI agent suggested</span></div>
            <article className="board-row volunteer-row">
              <div className="avatar" aria-hidden="true">J</div>
              <div className="row-copy"><span className="row-label">Volunteer available</span><h3>Jamie has 20 minutes now</h3><p>Practical help · nearby</p></div>
              <span className="verified-mark" aria-label="Human reviewed"><LineIcon name="shield" /></span>
            </article>
            <div className="switchboard-foot"><span>Spare time, made useful.</span><span className="foot-line" aria-hidden="true" /></div>
          </div>
        </section>

        <section className="signal-band" aria-label="Available time windows">
          <div className="signal-intro"><p>Spare moments, or the small windows already in your day.</p></div>
          <div className="signal-times">{durations.map((minutes) => <span key={minutes}><strong>{minutes}</strong><small>min</small></span>)}</div>
          <p className="signal-caption">No fixed shifts. Choose what fits.</p>
        </section>

        <section className="section intro-section" id="how-it-works">
            <div className="section-heading split-heading">
            <div><h2>Neighbourly help, carefully coordinated.</h2></div>
            <p>One person asks. Another person has a little time. Help Nearby makes the handoff clearer, safer, and easier to act on.</p>
          </div>
          <div className="process-list">
            <article><span className="process-number">01</span><div className="process-icon"><LineIcon name="phone" /></div><div><h3>Tell us what you need</h3><p>Share one short, non-urgent task and whether a call or nearby help suits you.</p></div></article>
            <article><span className="process-number">02</span><div className="process-icon"><LineIcon name="people" /></div><div><h3>We review the request</h3><p>A coordinator checks that the request is suitable, safe, and clear before contacting volunteers.</p></div></article>
            <article><span className="process-number">03</span><div className="process-icon"><LineIcon name="pin" /></div><div><h3>Connect in the right way</h3><p>If a suitable volunteer is available, we confirm a guided call or shared-space meet-up.</p></div></article>
          </div>
        </section>

        <section className="agent-section section" id="ai-assistance">
          <div className="agent-copy"><h2>AI does the sorting.<br /><em>People make the call.</em></h2><p>Behind the scenes, an AI agent can organise a request, read the available windows, and suggest a suitable fit. It helps the coordination team move with care and speed.</p><p className="agent-rule"><span className="signal-mark" aria-hidden="true" /><strong>Human-in-the-loop</strong> AI never approves volunteers, promises fulfilment, or dispatches anyone automatically.</p></div>
          <div className="agent-flow" aria-label="AI-assisted matching flow">
            <div className="flow-line" aria-hidden="true" />
            <div className="flow-step"><span className="flow-node">01</span><div><span>Resident request</span><strong>“I need a little help nearby.”</strong></div></div>
            <div className="flow-step highlighted"><span className="flow-node">02</span><div><span>AI agent</span><strong>Sorts time, task, format, and area</strong></div></div>
            <div className="flow-step"><span className="flow-node">03</span><div><span>Coordinator review</span><strong>Checks the match before contact</strong></div></div>
          </div>
        </section>

        <section className="section help-section" id="help">
          <div className="help-copy"><h2>Everyday tasks feel lighter when someone nearby can help.</h2><p>Our pilot is for straightforward, short requests that can be completed safely by call or in a familiar shared space.</p><div className="boundary-note"><span className="boundary-icon"><LineIcon name="shield" /></span><p><strong>Clear boundaries keep the pilot safe.</strong> No cash handling, banking, passwords, medication, medical care, transport, heavy lifting, personal care, or emergency requests.</p></div></div>
          <div className="task-list">
            <article><span className="task-symbol"><LineIcon name="parcel" /></span><div><h3>Parcel or grocery collection</h3><p>Collecting prepaid items nearby and bringing them to an agreed common area.</p></div></article>
            <article><span className="task-symbol"><LineIcon name="people" /></span><div><h3>Simple prepaid shopping</h3><p>Picking up a small prepaid purchase without volunteers advancing or handling money.</p></div></article>
            <article><span className="task-symbol"><LineIcon name="device" /></span><div><h3>Device or online guidance</h3><p>Everyday settings, calls, messaging apps, and understanding simple online forms.</p></div></article>
            <article><span className="task-symbol"><LineIcon name="clock" /></span><div><h3>General practical help</h3><p>Other short, non-urgent requests that fit the pilot&apos;s safety boundaries.</p></div></article>
          </div>
        </section>

        <section className="time-section section">
          <div className="time-card"><div className="time-card-copy"><h2>Your spare time is enough.</h2><p>No fixed shifts. No long-term commitment. Share a small window, choose call or nearby help, and only accept tasks that feel right for you.</p><a className="text-link light-link" href="#volunteer">Join the pilot <LineIcon name="arrow" /></a></div><div className="time-selector" aria-label="Choose an example availability window"><span className="selector-label">I have time for</span><div className="duration-buttons">{durations.map((minutes) => <button key={minutes} type="button" className={duration === minutes ? "selected" : ""} onClick={() => setDuration(minutes)} aria-pressed={duration === minutes}><strong>{minutes}</strong><span>minutes</span></button>)}</div><div className="selector-result"><span className="pulse-dot" aria-hidden="true" /><p><strong>{duration} minutes available</strong><br />We would only show requests that fit.</p></div></div></div>
        </section>

        <section className="section safety-section" id="safety">
          <div className="section-heading split-heading"><div><h2>Small, clear boundaries help everyone feel comfortable.</h2></div><p>Help Nearby is a pilot, not an emergency service. Trust is built through modest promises and visible human decisions.</p></div>
          <div className="safety-list"><article><span><LineIcon name="shield" /></span><div><h3>Reviewed volunteers</h3><p>Volunteers must be at least 18 and complete a basic identity and safety review.</p></div></article><article><span><LineIcon name="pin" /></span><div><h3>Shared spaces</h3><p>In-person pilot meetings use familiar common areas, not private homes.</p></div></article><article><span><LineIcon name="clock" /></span><div><h3>No guaranteed match</h3><p>Every request depends on suitability, timing, and volunteer availability.</p></div></article><article><span><LineIcon name="phone" /></span><div><h3>Stay in control</h3><p>On a call, you stay in control of your device and private information.</p></div></article></div>
        </section>

        <section className="section forms-section"><div className="form-shell resident-form" id="request"><div className="form-intro"><h2>Get help with one small everyday task.</h2><p>Choose a short time window and tell us whether a call or nearby help would suit you.</p></div><div className="embedded-form-frame"><iframe src={residentFormUrl} title="Request Help Nearby form" loading="lazy" /></div><p className="form-privacy-note">Your response goes directly into Help Nearby&apos;s private operations workspace.</p></div><div className="form-shell volunteer-form" id="volunteer"><div className="form-intro"><h2>Make a spare moment useful.</h2><p>Offer 10, 20, 30, or 60 minutes by call or nearby, without committing to a fixed shift.</p></div><div className="embedded-form-frame"><iframe src={volunteerFormUrl} title="Volunteer with Help Nearby form" loading="lazy" /></div><p className="form-privacy-note">Your response goes directly into Help Nearby&apos;s private operations workspace.</p></div></section>

        <section className="section partner-section"><div><h2>Open the right neighbourhood first.</h2></div><div><p>We are looking for organisations that know local residents, can offer a familiar common space, and want to explore a simple community-help pilot.</p><a className="button partner-button" href="mailto:help.nearbysg@gmail.com">Discuss a pilot <LineIcon name="arrow" /></a></div></section>

        <section className="section faq-section"><div className="section-heading narrow"><h2>Before you take part</h2></div><div className="faq-list"><details><summary>Is Help Nearby an emergency service?<span aria-hidden="true">+</span></summary><p>No. Help Nearby is only for simple, non-urgent everyday requests. For emergencies, contact the appropriate emergency service.</p></details><details><summary>Can I get help through a call?<span aria-hidden="true">+</span></summary><p>Yes. Suitable requests may be handled through a guided voice or video call. You stay in control of your device and should never reveal passwords or private account details.</p></details><details><summary>Does it cost anything?<span aria-hidden="true">+</span></summary><p>No. The pilot is free for residents, and volunteers are not paid or tipped.</p></details><details><summary>Will a volunteer handle my phone or password?<span aria-hidden="true">+</span></summary><p>You should remain in control of your device. Volunteers must never request passwords, banking details, or access to private accounts.</p></details><details><summary>Does submitting a form guarantee help?<span aria-hidden="true">+</span></summary><p>No. The pilot will open in selected areas, and every request depends on suitability and volunteer availability.</p></details><details><summary>What kind of help can I request?<span aria-hidden="true">+</span></summary><p>Short, clearly defined tasks such as collecting a prepaid parcel or grocery order, simple prepaid shopping, device setup, online forms, and general practical guidance.</p></details></div></section>
      </div>

      <footer><a className="brand footer-brand" href="#top"><img className="brand-logo" src="./help-nearby-logo.svg" alt="Help Nearby" /><span className="brand-wordmark">Help Nearby</span></a><p>Spare time, matched with simple needs nearby.</p><span>Non-profit pilot concept · Singapore</span></footer>
    </main>
  );
}
