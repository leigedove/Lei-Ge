import type { Metadata } from "next";
import { siteBasePath } from "../site-data";

export const metadata: Metadata = {
  title: "Life",
  description:
    "A glimpse of Lei Ge's life beyond research: diving, baking, dressmaking, painting, and calligraphy.",
};

const lifeImage = (name: string) => `${siteBasePath}/life/${name}`;

export default function LifePage() {
  return (
    <main id="main" className="life-page">
      <section className="life-hero shell">
        <div className="life-hero-copy">
          <p className="eyebrow-label">Beyond research</p>
          <h1>Life, outside the lab.</h1>
          <p>
            Underwater, at the sewing table, or making something by hand.
          </p>
        </div>
        <figure className="life-hero-photo">
          <img
            src={lifeImage("sea-lion.jpg")}
            alt="A curious sea lion looking through clear water"
            width="1800"
            height="1012"
          />
        </figure>
      </section>

      <section className="life-gallery shell">
        <header className="life-gallery-heading">
          <p className="eyebrow-label">Things I love</p>
          <h2>A few ways I reset.</h2>
        </header>

        <div className="life-grid">
          <figure className="life-card life-card-wide">
            <img
              src={lifeImage("dive-master.jpg")}
              alt="Lei Ge scuba diving in clear blue water"
              width="1800"
              height="1012"
              loading="lazy"
            />
            <figcaption>
              <h3>Dive Master</h3>
              <p>My favourite kind of silence.</p>
            </figcaption>
          </figure>

          <figure className="life-card">
            <img
              src={lifeImage("baking.jpg")}
              alt="Lei Ge piping a buttercream flower while baking"
              width="1400"
              height="932"
              loading="lazy"
            />
            <figcaption>
              <h3>Baking</h3>
              <p>Precision, patience, and buttercream.</p>
            </figcaption>
          </figure>

          <figure className="life-card life-card-tall">
            <img
              src={lifeImage("dressmaking.jpg")}
              alt="A half-finished cream dress fitted on a dress form"
              width="1050"
              height="1400"
              loading="lazy"
            />
            <figcaption>
              <h3>Making clothes</h3>
              <p>From a flat piece of cloth to form.</p>
            </figcaption>
          </figure>

          <figure className="life-card">
            <img
              src={lifeImage("painting.jpg")}
              alt="Lei Ge's colourful oil painting of flowers in a vase"
              width="1400"
              height="1400"
              loading="lazy"
            />
            <figcaption>
              <h3>Painting</h3>
              <p>Colour first. Tidying up later.</p>
            </figcaption>
          </figure>

          <figure className="life-card life-card-wide">
            <img
              src={lifeImage("calligraphy.jpg")}
              alt="A Chinese calligraphy work written by Lei Ge"
              width="1400"
              height="787"
              loading="lazy"
            />
            <figcaption>
              <h3>Calligraphy</h3>
              <p>Paint, ink, and nowhere to rush to.</p>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
