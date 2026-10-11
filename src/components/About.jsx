// src/components/About.jsx
import { useEffect, useRef, useState } from "react";
import her01 from "../assets/her01.jpeg";
import photo3 from "../assets/photo-3.jpeg";


// About photos, shown in this order. Each one stays for 4 seconds.
const ABOUT_PHOTOS = [
  { src: photo3, alt: "African_Couzin portrait in a leather jacket" },
  { src: her01, alt: "African_Couzin studio portrait in a black jacket" },
];
const SLIDE_INTERVAL = 4000;

export default function About() {
  const sectionRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Switch to the next photo every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % ABOUT_PHOTOS.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .about-section {
          padding: 140px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: var(--deep-black);
        }

        .about-section::before {
          content: 'ABOUT';
          position: absolute;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 220px;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,168,76,0.05);
          top: 40px;
          left: -10px;
          pointer-events: none;
          letter-spacing: 12px;
          line-height: 1;
        }

        /* --- IMAGE SIDE --- */
        .about-image-block {
          position: relative;
        }

        .about-img-frame {
          aspect-ratio: 3 / 4;
          background: linear-gradient(160deg, var(--charcoal), #2A1506);
          border: 1px solid rgba(201,168,76,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Slideshow: photos are stacked and cross-fade */
        .about-img-frame img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 1.2s ease, transform 5s ease-out;
        }

        .about-img-frame img.active {
          opacity: 1;
          transform: scale(1);
        }

        .about-img-frame:hover img.active {
          transform: scale(1.04);
          transition: opacity 1.2s ease, transform 0.7s ease;
        }

        /* Slide indicators */
        .about-dots {
          position: absolute;
          bottom: 28px;
          right: 28px;
          z-index: 3;
          display: flex;
          gap: 10px;
        }

        .about-dot {
          width: 28px;
          height: 2px;
          padding: 0;
          border: none;
          background: rgba(201,168,76,0.3);
          cursor: pointer;
          transition: background 0.4s ease;
        }

        .about-dot.active { background: var(--gold); }

        @media (prefers-reduced-motion: reduce) {
          .about-img-frame img,
          .about-img-frame img.active { transform: none; transition: opacity 0.6s ease; }
        }

        .about-img-frame::after {
          content: '';
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(201,168,76,0.12);
          pointer-events: none;
          z-index: 2;
        }

        .accent-box {
          position: absolute;
          bottom: -24px;
          right: -24px;
          width: 110px;
          height: 110px;
          border: 2px solid var(--gold);
          opacity: 0.15;
          z-index: -1;
        }

        .accent-dot {
          position: absolute;
          top: -16px;
          left: -16px;
          width: 60px;
          height: 60px;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 50%;
        }

        .img-tag {
          position: absolute;
          bottom: 24px;
          left: -20px;
          background: var(--gold);
          color: var(--deep-black);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 3px;
          padding: 10px 20px;
          white-space: nowrap;
          z-index: 3;
        }

        /* --- CONTENT SIDE --- */
        .about-content {
          position: relative;
          z-index: 2;
        }

        .section-label {
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .section-label::before {
          content: '';
          display: block;
          width: 30px;
          height: 1px;
          background: var(--gold);
        }

        .about-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 32px;
          color: var(--warm-white);
        }

        .about-heading em {
          color: var(--gold);
          font-style: italic;
        }

        .about-body {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          line-height: 1.9;
          color: rgba(245, 237, 216, 0.72);
          margin-bottom: 18px;
        }

        .about-divider {
          width: 40px;
          height: 1px;
          background: rgba(201,168,76,0.4);
          margin: 32px 0;
        }

        /* --- TRAITS PILLS --- */
        .traits {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .trait-pill {
          border: 1px solid rgba(201,168,76,0.25);
          padding: 7px 16px;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(245,237,216,0.6);
          transition: border-color 0.3s, color 0.3s;
          cursor: default;
        }

        .trait-pill:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        /* --- STATS --- */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid rgba(201,168,76,0.15);
        }

        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 44px;
          color: var(--gold);
          letter-spacing: 2px;
          display: block;
          line-height: 1;
        }

        .stat-label {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--cream);
          opacity: 0.45;
          margin-top: 6px;
          display: block;
        }

        /* --- SCROLL REVEAL --- */
        .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 768px) {
  .about-section {
    grid-template-columns: 1fr !important;
    padding: 60px 24px !important;
    gap: 48px !important;
  }

  .about-section::before {
    font-size: 90px !important;
  }

  .about-img-frame {
    aspect-ratio: 4 / 5 !important;
    max-height: 480px;
  }

  .img-tag {
    left: 0 !important;
    font-size: 11px !important;
  }

  .accent-box {
    bottom: -16px !important;
    right: -16px !important;
    width: 70px !important;
    height: 70px !important;
  }

  .about-stats {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 16px !important;
  }

  .stat-num { font-size: 32px !important; }
}
      `}</style>

      <section className="about-section" id="about" ref={sectionRef}>
        {/* ── IMAGE BLOCK ── */}
        <div className="about-image-block reveal">
          <div className="about-img-frame">
            {ABOUT_PHOTOS.map((photo, i) => (
              <img
                key={i}
                src={photo.src}
                alt={photo.alt}
                className={i === current ? "active" : ""}
                aria-hidden={i !== current}
              />
            ))}

            <div className="about-dots">
              {ABOUT_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  className={`about-dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show photo ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="accent-box" />
          <div className="accent-dot" />
          <div className="img-tag">Nairobi, Kenya</div>
        </div>

        {/* ── CONTENT ── */}
        <div className="about-content">
          <p className="section-label reveal">About African_Couzin</p>

          <h2 className="about-heading reveal">
            A Journey of
            <br />
            <em>Visual Storytelling</em>
          </h2>

          <p className="about-body reveal">
            African_Couzin is a Nairobi-based model balancing a professional
            career with a passion for visual storytelling and brand
            representation.
          </p>

          <p className="about-body reveal">
            With a strong presence, confident demeanor, and versatile look, he
            brings authenticity and elegance to every project. Modeling began as
            a side pursuit but quickly evolved into a creative outlet and
            growing professional journey.
          </p>

          <p className="about-body reveal">
            African_Couzin is passionate about working with brands that value
            originality, culture, and meaningful impact driven, disciplined,
            and camera-ready at every set.
          </p>

          <div className="about-divider reveal" />

          {/* Trait pills */}
          <div className="traits reveal">
            {[
              "Driven",
              "Disciplined",
              "Camera-Ready",
              "Versatile",
              "Authentic",
            ].map((t) => (
              <span className="trait-pill" key={t}>
                {t}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="about-stats reveal">
            <div>
              <span className="stat-num">6+</span>
              <span className="stat-label">Specialities</span>
            </div>
            <div>
              <span className="stat-num">100%</span>
              <span className="stat-label">Authentic</span>
            </div>
            <div>
              <span className="stat-num">NBO</span>
              <span className="stat-label">Based</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


