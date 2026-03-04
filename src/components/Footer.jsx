// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{ padding: '48px 60px',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: 'Bebas Neue', fontSize: 18,
        letterSpacing: 4, color: 'var(--gold)' }}>African_Couzin</span>
      <span style={{ fontFamily: 'Cormorant Garamond', fontSize: 13,
        fontStyle: 'italic', opacity: 0.8, color: 'var(--warm-white)' }}>
        Versatility & Authenticity · Nairobi, Kenya
      </span>
      <span style={{ fontSize: 10, letterSpacing: 2, opacity: 0.8, color: 'var(--warm-white)' }}>
        © 2025 African_Couzin
      </span>
    </footer>
  )
}