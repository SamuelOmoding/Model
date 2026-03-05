// src/components/Portfolio.jsx
import { useState } from 'react'

// ── Swap these filenames to match your actual files in src/assets/ ──
import photo1 from '../assets/photo-1.jpeg'
import photo2 from '../assets/photo-2.jpeg'
import photo3 from '../assets/photo-3.jpeg'
import photo4 from '../assets/photo-4.jpeg'
import photo5 from '../assets/photo-5.jpeg'
import photo6 from '../assets/photo-6.jpeg'
import photo7 from '../assets/photo-7.jpeg'
import photo8 from '../assets/photo-8.jpeg'
import photo9 from '../assets/photo-9.jpeg'
// import photo10 from '../assets/photo-10.jpeg'

const PHOTOS = [
  { id: 1,  src: photo1,  label: 'Featured',   category: 'Editorial',         featured: true  },
  { id: 2,  src: photo2,  label: 'Lifestyle',   category: 'Lifestyle',         featured: false },
  { id: 3,  src: photo3,  label: 'Fashion',     category: 'Fashion',           featured: false },
  { id: 4,  src: photo4,  label: 'Commercial',  category: 'Commercial',        featured: false },
  { id: 5,  src: photo5,  label: 'Corporate',   category: 'Corporate Branding',featured: false },
  { id: 6,  src: photo6,  label: 'Tourism',     category: 'Tourism Campaign',  featured: false },
  { id: 7,  src: photo7,  label: 'Editorial',   category: 'Editorial',         featured: false },
  { id: 8,  src: photo8,  label: 'Campaign',    category: 'Campaign',          featured: false },
  { id: 9,  src: photo9,  label: 'Portrait',    category: 'Portrait',          featured: false },
  // { id: 10, src: photo10, label: 'Brand',       category: 'Brand',             featured: false },
]


export default function Portfolio() {
  const [hovered, setHovered] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  const openLightbox  = (photo) => setLightbox(photo)
  const closeLightbox = () => setLightbox(null)

  const prev = () => {
    const idx = PHOTOS.findIndex(p => p.id === lightbox.id)
    setLightbox(PHOTOS[(idx - 1 + PHOTOS.length) % PHOTOS.length])
  }

  const next = () => {
    const idx = PHOTOS.findIndex(p => p.id === lightbox.id)
    setLightbox(PHOTOS[(idx + 1) % PHOTOS.length])
  }

  return (
    <>
      <style>{`
        .portfolio-section {
          padding: 100px 60px;
          background: var(--deep-black);
        }

        /* ── HEADER ── */
        .portfolio-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 60px;
          flex-wrap: wrap;
          gap: 24px;
        }

        .portfolio-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 7vw, 100px);
          line-height: 1;
          color: var(--warm-white);
          letter-spacing: 3px;
        }

        .portfolio-title span {
          display: block;
          color: var(--gold);
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 0.5em;
          letter-spacing: 2px;
          margin-bottom: 4px;
        }

        .portfolio-count {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-style: italic;
          color: rgba(245,237,216,0.4);
          letter-spacing: 1px;
          padding-bottom: 8px;
        }

        /* ── GRID ── */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: auto;
          gap: 14px;
        }

        /* Featured slot — spans 2 cols × 2 rows */
        .portfolio-item-featured {
          grid-column: span 2;
          grid-row: span 2;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: var(--charcoal);
        }

        /* Regular slots */
        .portfolio-item {
          aspect-ratio: 3 / 4;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: var(--charcoal);
        }

        /* Shared image styles */
        .portfolio-item img,
        .portfolio-item-featured img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.7s ease;
        }

        .portfolio-item:hover img,
        .portfolio-item-featured:hover img {
          transform: scale(1.05);
        }

        /* ── HOVER OVERLAY ── */
        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,8,5,0.88) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.35s;
          display: flex;
          align-items: flex-end;
          padding: 24px;
          z-index: 2;
        }

        .portfolio-item:hover .portfolio-overlay,
        .portfolio-item-featured:hover .portfolio-overlay {
          opacity: 1;
        }

        .overlay-inner {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          width: 100%;
        }

        .overlay-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-style: italic;
          color: var(--cream);
          letter-spacing: 1px;
        }

        .overlay-label span {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 5px;
          font-style: normal;
        }

        .overlay-expand {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(201,168,76,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          flex-shrink: 0;
          transition: background 0.3s;
        }

        .overlay-expand:hover {
          background: rgba(201,168,76,0.15);
        }

        /* ── NUMBER BADGE ── */
        .photo-number {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          color: var(--gold);
          background: rgba(10,8,5,0.6);
          padding: 4px 10px;
          z-index: 3;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(201,168,76,0.2);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .portfolio-item:hover .photo-number,
        .portfolio-item-featured:hover .photo-number {
          opacity: 1;
        }

        /* ── LIGHTBOX ── */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5,4,2,0.96);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          backdrop-filter: blur(6px);
        }

        .lightbox-inner {
          position: relative;
          max-width: 800px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .lightbox-img-wrap {
          position: relative;
          width: 100%;
          max-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img-wrap img {
          max-height: 80vh;
          max-width: 100%;
          object-fit: contain;
          display: block;
          border: 1px solid rgba(201,168,76,0.12);
        }

        .lightbox-close {
          position: absolute;
          top: -16px;
          right: -16px;
          width: 40px;
          height: 40px;
          background: var(--deep-black);
          border: 1px solid rgba(201,168,76,0.3);
          color: var(--cream);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s, color 0.3s;
          z-index: 10;
        }

        .lightbox-close:hover {
          background: var(--gold);
          color: var(--deep-black);
        }

        .lightbox-nav {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .lightbox-nav-btn {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(201,168,76,0.3);
          background: transparent;
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s, border-color 0.3s;
        }

        .lightbox-nav-btn:hover {
          background: rgba(201,168,76,0.1);
          border-color: var(--gold);
        }

        .lightbox-meta {
          text-align: center;
        }

        .lightbox-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 4px;
          color: var(--gold);
          display: block;
        }

        .lightbox-category {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-style: italic;
          color: rgba(245,237,216,0.5);
          display: block;
          margin-top: 4px;
        }

        .lightbox-counter {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          color: rgba(245,237,216,0.3);
          text-transform: uppercase;
          margin-top: 8px;
          display: block;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
  .portfolio-section {
    padding: 60px 24px !important;
  }

  .portfolio-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
  }

  .portfolio-item-featured {
    grid-column: span 2 !important;
    aspect-ratio: 4 / 5 !important;
  }

  .portfolio-header {
    flex-direction: column !important;
    align-items: flex-start !important;
    margin-bottom: 32px !important;
  }
}

@media (max-width: 420px) {
  .portfolio-grid {
    grid-template-columns: 1fr !important;
  }

  .portfolio-item-featured {
    grid-column: span 1 !important;
  }
}
      `}</style>

      <section className="portfolio-section" id="portfolio">

        {/* ── Header ── */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            <span>African Couzin</span>
            Portfolio Gallery
          </h2>
          <p className="portfolio-count">{PHOTOS.length} photographs</p>
        </div>

        {/* ── Grid ── */}
        <div className="portfolio-grid">
          {PHOTOS.map((photo, i) => {
            const isFeatured = photo.featured
            const cls = isFeatured ? 'portfolio-item-featured' : 'portfolio-item'

            return (
              <div
                key={photo.id}
                className={cls}
                onMouseEnter={() => setHovered(photo.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => openLightbox(photo)}
              >
                <img src={photo.src} alt={`AfricanCouzin — ${photo.label}`} />

                {/* Number badge */}
                <div className="photo-number">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Hover overlay */}
                <div className="portfolio-overlay">
                  <div className="overlay-inner">
                    <div className="overlay-label">
                      <span>{photo.category}</span>
                      {photo.label}
                    </div>
                    <div className="overlay-expand">
                      <svg width="14" height="14" fill="none" stroke="currentColor"
                        strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>

            <div className="lightbox-img-wrap">
              <img src={lightbox.src} alt={lightbox.label} />
              <button className="lightbox-close" onClick={closeLightbox}>
                <svg width="14" height="14" fill="none" stroke="currentColor"
                  strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Nav + meta */}
            <div className="lightbox-nav">
              <button className="lightbox-nav-btn" onClick={prev}>
                <svg width="16" height="16" fill="none" stroke="currentColor"
                  strokeWidth="1.5" viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>

              <div className="lightbox-meta">
                <span className="lightbox-label">{lightbox.label}</span>
                <span className="lightbox-category">{lightbox.category}</span>
                <span className="lightbox-counter">
                  {PHOTOS.findIndex(p => p.id === lightbox.id) + 1} / {PHOTOS.length}
                </span>
              </div>

              <button className="lightbox-nav-btn" onClick={next}>
                <svg width="16" height="16" fill="none" stroke="currentColor"
                  strokeWidth="1.5" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}





