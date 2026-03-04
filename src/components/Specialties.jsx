// src/components/Specialties.jsx

const specialties = [
  {
    icon: '📸',
    name: 'Commercial',
    desc: 'Product campaigns, brand activations, and consumer advertising with impact.',
  },
  {
    icon: '🌿',
    name: 'Lifestyle',
    desc: 'Authentic, natural storytelling that resonates with modern audiences.',
  },
  {
    icon: '✦',
    name: 'Fashion',
    desc: 'Runway-ready versatility blending contemporary and traditional aesthetics.',
  },
  {
    icon: '💼',
    name: 'Corporate Branding',
    desc: 'Professional imagery for brands building credibility and executive presence.',
  },
  {
    icon: '🌍',
    name: 'Tourism Campaigns',
    desc: 'Showcasing the beauty and culture of Africa through compelling visuals.',
  },
  {
    icon: '📰',
    name: 'Editorial',
    desc: 'Magazine-grade conceptual shoots pushing creative boundaries.',
  },
]

export default function Specialties() {
  return (
    <>
      <style>{`
        .specialties-section {
          padding: 120px 60px;
          background: var(--warm-dark);
          position: relative;
          overflow: hidden;
        }

        /* Watermark */
        .specialties-section::before {
          content: 'EXPERTISE';
          position: absolute;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 180px;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,168,76,0.04);
          top: 30px;
          left: -10px;
          pointer-events: none;
          letter-spacing: 10px;
          line-height: 1;
        }

        /* ── HEADER ── */
        .specialties-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .specialties-label {
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          font-family: 'DM Sans', sans-serif;
        }

        .specialties-label::before,
        .specialties-label::after {
          content: '';
          display: block;
          width: 30px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
        }

        .specialties-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 80px);
          letter-spacing: 4px;
          color: var(--warm-white);
          line-height: 1;
        }

        .specialties-heading em {
          color: var(--gold);
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 0.6em;
          display: block;
          letter-spacing: 2px;
          margin-bottom: 6px;
        }

        .specialties-subtext {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-style: italic;
          color: rgba(245,237,216,0.45);
          margin-top: 16px;
          letter-spacing: 0.5px;
        }

        /* ── GRID ── */
        .specialties-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── CARD ── */
        .specialty-card {
          padding: 52px 36px;
          background: rgba(10,8,5,0.5);
          border: 1px solid rgba(201,168,76,0.07);
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: background 0.4s, border-color 0.4s;
          cursor: default;
        }

        /* Gold underline on hover */
        .specialty-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .specialty-card:hover {
          background: rgba(201,168,76,0.05);
          border-color: rgba(201,168,76,0.18);
        }

        .specialty-card:hover::after {
          transform: scaleX(1);
        }

        /* Icon */
        .specialty-icon {
          font-size: 36px;
          display: block;
          margin-bottom: 20px;
          transition: transform 0.35s ease;
          line-height: 1;
        }

        .specialty-card:hover .specialty-icon {
          transform: translateY(-6px) scale(1.1);
        }

        /* Number */
        .specialty-number {
          position: absolute;
          top: 16px;
          right: 20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          color: var(--gold);
          opacity: 0.2;
          transition: opacity 0.3s;
        }

        .specialty-card:hover .specialty-number {
          opacity: 0.5;
        }

        /* Name */
        .specialty-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 3px;
          color: var(--warm-white);
          margin-bottom: 12px;
          transition: color 0.3s;
        }

        .specialty-card:hover .specialty-name {
          color: var(--gold);
        }

        /* Divider */
        .specialty-divider {
          width: 24px;
          height: 1px;
          background: var(--gold);
          margin: 0 auto 14px;
          opacity: 0.3;
          transition: width 0.3s, opacity 0.3s;
        }

        .specialty-card:hover .specialty-divider {
          width: 40px;
          opacity: 0.7;
        }

        /* Desc */
        .specialty-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-style: italic;
          color: rgba(245,237,216,0.45);
          line-height: 1.75;
        }

        /* ── BOTTOM STRIP ── */
        .specialties-strip {
          margin-top: 72px;
          padding-top: 48px;
          border-top: 1px solid rgba(201,168,76,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px 32px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .strip-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(201,168,76,0.5);
          padding: 6px 16px;
          border: 1px solid rgba(201,168,76,0.12);
          transition: color 0.3s, border-color 0.3s;
          cursor: default;
        }

        .strip-tag:hover {
          color: var(--gold);
          border-color: rgba(201,168,76,0.35);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .specialties-section {
            padding: 80px 30px;
          }

          .specialties-section::before {
            font-size: 100px;
          }

          .specialties-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .specialty-card {
            padding: 36px 24px;
          }
        }

        @media (max-width: 560px) {
          .specialties-section {
            padding: 60px 20px;
          }

          .specialties-grid {
            grid-template-columns: 1fr;
          }

          .specialties-strip {
            gap: 10px 16px;
          }
        }
      `}</style>

      <section className="specialties-section" id="specialties">

        {/* ── Header ── */}
        <div className="specialties-header">
          <p className="specialties-label">Areas of Expertise</p>
          <h2 className="specialties-heading">
            <em>What I bring</em>
            Specialties
          </h2>
          <p className="specialties-subtext">
            Versatile across every brief — from boardroom to runway.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="specialties-grid">
          {specialties.map((s, i) => (
            <div className="specialty-card" key={s.name}>
              <span className="specialty-number">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="specialty-icon">{s.icon}</span>
              <p className="specialty-name">{s.name}</p>
              <div className="specialty-divider" />
              <p className="specialty-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Tag strip ── */}
        <div className="specialties-strip">
          {['Commercial', 'Lifestyle', 'Fashion', 'Corporate Branding',
            'Tourism Campaigns', 'Editorial'].map(tag => (
            <span className="strip-tag" key={tag}>{tag}</span>
          ))}
        </div>

      </section>
    </>
  )
}




