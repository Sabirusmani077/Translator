import { refreshReveal } from "./app.js?v=20260405-local-home-2";
import { getIcon } from "./ui-components.js?v=20260405-local-home-2";
import {
  getPhraseOfTheDay,
  getSiteData,
  getWordOfTheDay,
} from "./storage.js?v=20260405-local-home-2";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("page-root");
  const siteData = getSiteData();
  const wordOfTheDay = getWordOfTheDay();
  const phraseOfTheDay = getPhraseOfTheDay();
  const whyChooseIcons = ["translate", "conversation", "practice"];

  root.innerHTML = `
    <section class="hero reveal">
      <div class="hero__copy">
        <span class="eyebrow">${siteData.homepage.announcement}</span>
        <div class="brand-hero">
          <span class="brand-hero__avatar">
            <img src="${siteData.brand.photoUrl}" alt="Mr Sabir portrait" />
          </span>
          <span class="brand-hero__text">
            <span class="brand-hero__label">Personal brand</span>
            <strong>
              <span>english</span>
              <span>with</span>
              <span>mr sabir</span>
            </strong>
          </span>
        </div>
        <div class="stack-actions" style="gap: 16px;">
          <h1>${siteData.homepage.heroTitle}</h1>
          <p>${siteData.homepage.heroSubtitle}</p>
        </div>
        <div class="hero__actions">
          <a class="button button-solid" href="translator.html">${siteData.homepage.secondaryCtaLabel}</a>
          <a class="button button-ghost" href="practice.html">Start Practice</a>
          <a class="button button-subtle" href="#terms">Quick Info</a>
        </div>
        <div class="hero__trust">
          <span class="mini-chip">Hindi support</span>
          <span class="mini-chip">Natural spoken English</span>
          <span class="mini-chip">Fast two-way translator</span>
        </div>
      </div>
      <div class="hero-visual">
        <div class="glass-card hero-visual__panel">
          <div class="translation-preview">
            <span class="translation-preview__label">Live example</span>
            <div class="translation-preview__content">
              <div class="translation-preview__row">
                <span class="muted">Hindi thought</span>
                <strong>${phraseOfTheDay.hindi}</strong>
              </div>
              <div class="translation-preview__row">
                <span class="muted">Natural English</span>
                <strong>${phraseOfTheDay.naturalEnglish}</strong>
              </div>
              <div class="translation-preview__row">
                <span class="muted">Better alternative</span>
                <strong>${phraseOfTheDay.betterAlternative}</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-2">
          <div class="card-stat">
            <span>Word of the day</span>
            <strong>${wordOfTheDay.word}</strong>
          </div>
          <div class="card-stat">
            <span>Daily focus</span>
            <strong>${siteData.stats[2].value}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="section reveal">
      <div class="section-header">
        <div>
          <span class="eyebrow">Quick tools</span>
          <h2>Open the main learning tools without extra pages</h2>
        </div>
        <p>Site ko compact rakha gaya hai, isliye yahan se direct kaam wali cheezein open ho jati hain.</p>
      </div>
      <div class="grid grid-3">
        <article class="card">
          <div class="card__icon">${getIcon("translate")}</div>
          <div class="card__meta">
            <span class="badge">Translator</span>
            <h3>Fast two-way translation</h3>
            <p>Hindi, Hinglish, aur English lines ko quickly translate karke spoken output dekhiye.</p>
            <a class="button button-ghost" href="translator.html">Open Translator</a>
          </div>
        </article>
        <article class="card">
          <div class="card__icon">${getIcon("practice")}</div>
          <div class="card__meta">
            <span class="badge">Practice</span>
            <h3>Daily speaking drills</h3>
            <p>Short speaking patterns aur repeat practice ke saath fluency improve kijiye.</p>
            <a class="button button-ghost" href="practice.html">Open Practice</a>
          </div>
        </article>
        <article class="card">
          <div class="card__icon">${getIcon("insight")}</div>
          <div class="card__meta">
            <span class="badge">Today</span>
            <h3>${wordOfTheDay.word}</h3>
            <p>Phrase of the day: ${phraseOfTheDay.naturalEnglish}</p>
            <p>Use case: ${wordOfTheDay.useCase}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section reveal">
      <div class="section-header">
        <div>
          <span class="eyebrow">Compact overview</span>
          <h2>Only the most useful learning points stay visible</h2>
        </div>
        <p>Long sections hata diye gaye hain, taki footer tak jaldi pahunch sakein aur homepage simple lage.</p>
      </div>
      <div class="grid grid-2">
        <article class="spotlight-card">
          <span class="badge">Why learners like it</span>
          ${siteData.whyChooseUs
            .map(
              (item, index) => `
                <div class="card__meta">
                  <div class="card__icon">${getIcon(
                    siteData.featureCards[index]?.icon || whyChooseIcons[index] || "insight"
                  )}</div>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </div>
              `
            )
            .join("")}
        </article>
        <article class="spotlight-card">
          <span class="badge">Learning snapshot</span>
          <div class="grid grid-2">
            ${siteData.stats
              .slice(0, 4)
              .map(
                (stat) => `
                  <div class="card-stat">
                    <span>${stat.label}</span>
                    <strong>${stat.value}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
          <ul class="info-list">
            ${siteData.advantages.slice(0, 4).map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      </div>
    </section>

    <section class="section reveal">
      <div class="page-hero compact-cta-shell">
        <div class="page-hero__copy">
          <span class="eyebrow">Start now</span>
          <h2>Translator aur practice dono yahin se direct use kijiye</h2>
          <p>Extra pages aur tabs ko side par rakha gaya hai, taki main tools fast milen aur page short rahe.</p>
          <div class="hero__actions">
            <a class="button button-solid" href="translator.html">Open Translator</a>
            <a class="button button-ghost" href="practice.html">Start Practice</a>
            <a class="button button-subtle" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section reveal" id="terms">
      <div class="grid grid-3">
        <article class="spotlight-card">
          <h3>Terms</h3>
          <p>This local version is a frontend demo. Production policy later easily update ki ja sakti hai.</p>
        </article>
        <article class="spotlight-card" id="privacy">
          <h3>Privacy</h3>
          <p>Demo data browser storage me save hota hai jab tak backend connect na kiya jaye.</p>
        </article>
        <article class="spotlight-card" id="contact">
          <h3>Contact</h3>
          <p>Footer se email, mobile, aur social links ke through direct contact available hai.</p>
        </article>
      </div>
    </section>
  `;

  refreshReveal();
});
