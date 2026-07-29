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
          <p className="eyebrow-label">Off the clock · Life</p>
          <h1>Life, outside the lab.</h1>
          <p>
            When I&apos;m not thinking about models or materials, I&apos;m
            usually making something with my hands—or disappearing underwater
            for a while.
          </p>
          <p className="life-handwritten">
            I like hobbies that leave a trace: salt in my hair, flour on the
            counter, paint on my sleeves.
          </p>
        </div>
        <figure className="life-hero-photo">
          <img
            src={lifeImage("dive-master.jpg")}
            alt="Lei Ge scuba diving in clear blue water"
            width="1800"
            height="1012"
          />
          <figcaption>
            Somewhere below the surface, where everything gets wonderfully
            quiet.
          </figcaption>
        </figure>
      </section>

      <section className="life-story life-ocean shell">
        <div className="life-story-number">01</div>
        <div className="life-story-copy">
          <p className="life-kicker">Dive Master</p>
          <h2>My favourite kind of silence is underwater.</h2>
          <p>
            Diving is the place where I stop trying to solve things. As a Dive
            Master, I love the mix of calm and responsibility: checking the
            details, looking after the people around me, then letting the ocean
            set the pace.
          </p>
          <p>
            And every so often, a sea lion appears and acts as if you are the
            visitor—which, of course, you are.
          </p>
        </div>
        <figure className="life-ocean-photo">
          <img
            src={lifeImage("sea-lion.jpg")}
            alt="A curious sea lion looking through clear water"
            width="1800"
            height="1012"
            loading="lazy"
          />
          <figcaption>An excellent underwater neighbour.</figcaption>
        </figure>
      </section>

      <section className="life-making shell">
        <header className="life-section-heading">
          <span>02</span>
          <div>
            <p className="life-kicker">Things I make</p>
            <h2>Some ideas are better worked out by hand.</h2>
          </div>
        </header>

        <article className="life-feature life-baking">
          <div className="life-feature-copy">
            <span className="life-note">A little patience, a lot of butter</span>
            <h3>Baking</h3>
            <p>
              I can happily lose an afternoon piping buttercream flowers one
              petal at a time. Baking is part precision, part improvisation,
              and the nicest results are meant to be shared.
            </p>
          </div>
          <figure className="life-photo life-photo-wide">
            <img
              src={lifeImage("baking.jpg")}
              alt="Lei Ge piping a buttercream flower while baking"
              width="1400"
              height="932"
              loading="lazy"
            />
          </figure>
          <figure className="life-photo life-photo-tall">
            <img
              src={lifeImage("buttercream-cake.jpg")}
              alt="A cake decorated with detailed buttercream flowers"
              width="932"
              height="1400"
              loading="lazy"
            />
            <figcaption>Almost too pretty to cut. Almost.</figcaption>
          </figure>
        </article>

        <article className="life-feature life-dressmaking">
          <figure className="life-photo life-dress-photo">
            <img
              src={lifeImage("dressmaking.jpg")}
              alt="A half-finished cream dress fitted on a dress form"
              width="1050"
              height="1400"
              loading="lazy"
            />
          </figure>
          <div className="life-feature-copy">
            <span className="life-note">Pin, unpick, try again</span>
            <h3>Making clothes</h3>
            <p>
              I still love the moment a flat piece of cloth begins to hold a
              shape. Sewing keeps me close to material, proportion, and all the
              small decisions a finished garment quietly hides.
            </p>
            <p>
              It rarely goes perfectly the first time. That is part of the
              pleasure.
            </p>
          </div>
        </article>
      </section>

      <section className="life-quiet shell">
        <header className="life-section-heading">
          <span>03</span>
          <div>
            <p className="life-kicker">Slower hours</p>
            <h2>Paint, ink, and nowhere to rush to.</h2>
          </div>
        </header>
        <div className="life-quiet-grid">
          <figure className="life-photo life-painting-photo">
            <img
              src={lifeImage("painting.jpg")}
              alt="Lei Ge's colourful oil painting of flowers in a vase"
              width="1400"
              height="1400"
              loading="lazy"
            />
            <figcaption>Colour first, tidying up later.</figcaption>
          </figure>
          <div className="life-quiet-copy">
            <p>
              Painting lets me be less exact. Calligraphy asks for the
              opposite: one breath, one stroke, no undo button.
            </p>
            <p>
              I like moving between the two. One is a conversation with colour;
              the other is a lesson in attention.
            </p>
          </div>
          <figure className="life-photo life-calligraphy-photo">
            <img
              src={lifeImage("calligraphy.jpg")}
              alt="A Chinese calligraphy work written by Lei Ge"
              width="1400"
              height="787"
              loading="lazy"
            />
            <figcaption>Ink has a way of showing whether you hesitated.</figcaption>
          </figure>
        </div>
      </section>

      <section className="life-closing shell">
        <p className="eyebrow-label">Still curious</p>
        <p>
          I don&apos;t think of these as side projects. They are simply the
          other ways I pay attention to the world.
        </p>
      </section>
    </main>
  );
}
