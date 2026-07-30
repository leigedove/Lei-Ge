import type { Metadata } from "next";
import { siteBasePath } from "../site-data";

export const metadata: Metadata = {
  title: "Life — Dive Master",
  description:
    "Lei Ge's life beyond research: Dive Master and a creative portfolio exploring form, material, and line.",
};

const lifeImage = (name: string) => `${siteBasePath}/life/${name}`;

export default function LifePage() {
  return (
    <main id="main" className="life-page">
      <section className="life-hero shell">
        <header className="life-intro">
          <div>
            <p className="eyebrow-label">Life · Outside the lab</p>
            <h1>I&apos;m a Dive Master.</h1>
          </div>
          <p>
            Water, making, and the quiet pleasure
            <br />
            of learning with my hands.
          </p>
        </header>
        <figure className="life-hero-photo">
          <img
            src={lifeImage("sea-lion.jpg")}
            alt="A curious sea lion looking through clear water"
            width="1800"
            height="1012"
          />
          <figcaption>
            <strong>01 / Underwater</strong>
            <small>Sea lion · Baja California</small>
          </figcaption>
        </figure>
      </section>

      <section className="life-photo-essay shell" aria-label="Life in pictures">
        <header className="life-section-heading">
          <span>01 / Dive log</span>
          <p>Attention · Calm · Trust</p>
        </header>
        <div className="life-spread life-spread-ocean">
          <figure className="life-shot life-shot-open">
            <img
              src={lifeImage("open-water.jpg")}
              alt="A scuba diver swimming beside an underwater rock face"
              width="1440"
              height="1018"
              loading="lazy"
            />
            <figcaption><strong>Open water</strong></figcaption>
          </figure>

          <figure className="life-shot life-shot-team">
            <img
              src={lifeImage("dive-team.jpg")}
              alt="A team of divers preparing equipment on a boat"
              width="1920"
              height="1080"
              loading="lazy"
            />
            <figcaption><strong>Dive days</strong></figcaption>
          </figure>

          <figure className="life-shot life-shot-barracuda">
            <img
              src={lifeImage("barracuda-cropped.jpg")}
              alt="A large school of barracuda moving through blue water"
              width="1905"
              height="929"
              loading="lazy"
            />
            <figcaption><strong>Barracuda</strong></figcaption>
          </figure>

          <figure className="life-shot life-shot-turtle">
            <img
              src={lifeImage("sea-turtle-cropped.jpg")}
              alt="A sea turtle resting among coral"
              width="1290"
              height="603"
              loading="lazy"
            />
            <figcaption><strong>Sea turtle</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="life-art-section" aria-label="Creative portfolio">
        <div className="life-art-shell shell">
          <header className="life-art-heading">
            <div>
              <p className="eyebrow-label">02 · Creative practice</p>
              <h2>Made by hand.</h2>
            </div>
            <p>Form, colour, patience — in three different mediums.</p>
          </header>

          <div className="life-art-grid">
            <figure className="life-art-card life-art-form">
              <img
                src={lifeImage("garment-main.png")}
                alt="Lei Ge modelling a sculptural cream garment with layered white tulle"
                width="1800"
                height="2400"
                loading="lazy"
              />
              <figcaption>
                <strong>Garment</strong>
                <span>Structure in soft materials</span>
              </figcaption>
            </figure>

            <figure className="life-art-card life-art-cake">
              <img
                src={lifeImage("buttercream-cake.jpg")}
                alt="A cake decorated with detailed buttercream flowers"
                width="932"
                height="1400"
                loading="lazy"
              />
              <figcaption>
                <strong>Cake</strong>
                <span>Precision, patience, buttercream</span>
              </figcaption>
            </figure>

            <figure className="life-art-card life-art-calligraphy">
              <div className="life-art-calligraphy-frame">
                <img
                  src={lifeImage("calligraphy.jpg")}
                  alt="A Chinese calligraphy work written by Lei Ge"
                  width="1400"
                  height="787"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <strong>Calligraphy</strong>
                <span>Ink, rhythm, nowhere to rush to</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
